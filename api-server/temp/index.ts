import TempUsersCollection from '@db/collections/tempUsers';
import IUserData from '@utils/types/auth/IUserData';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

class TempService {
  async getUserByUsername(username: string) {
    // должен только брать пользователья и возвращать
    const tempUserCollection = await TempUsersCollection.getCollection();
    const tempUser = await tempUserCollection.findOne({
      'credentials.username': username,
    });
    return tempUser;
  }

  async getUserById(userId: string) {
    // должен только брать пользователья и возвращать
    const tempUserCollection = await TempUsersCollection.getCollection();
    const tempUser = await tempUserCollection.findOne({
      _id: new ObjectId(userId),
    });
    return tempUser;
  }

  async addUser(userData: IUserData) {
    //должен только добавить пользователя во временную коллекцию 
    const { credentials, personalInformation, accountInformation } = userData;
    const tempUserCollection = await TempUsersCollection.getCollection();
    const hashedPassword = await bcrypt.hash(credentials.password, 7);
    const { insertedId } = await tempUserCollection.insertOne({
      credentials: { ...credentials, password: hashedPassword },
      personalInformation,
      accountInformation,
    });
    return insertedId.toString();
  }

  async deleteUser(userId: string) {
    // должен только удалять пользователя
    const tempUserCollection = await TempUsersCollection.getCollection();
    await tempUserCollection.deleteOne({ _id: new ObjectId(userId) });
  }
}

export default new TempService();
