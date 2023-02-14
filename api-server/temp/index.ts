import TempUsersCollection from '@db/collections/tempUsers';
import IUserData from '@utils/types/auth/IUserData';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

class TempService {
  public static async getUserByUsername(username: string) {
    const tempUserCollection = await TempUsersCollection.getCollection();
    const tempUser = await tempUserCollection.findOne({
      'credentials.username': username,
    });
    return tempUser;
  }

  public static async getUserById(userId: string) {
    const tempUserCollection = await TempUsersCollection.getCollection();
    const tempUser = await tempUserCollection.findOne({
      _id: new ObjectId(userId),
    });
    return tempUser;
  }

  public static async addUser(userData: IUserData) {
    const { credentials, personalInformation, accountInformation } = userData;
    const tempUserCollection = await TempUsersCollection.getCollection();
    const hashedPassword = await bcrypt.hash(credentials.password, 7);
    const { insertedId } = await tempUserCollection.insertOne({
      credentials: { ...credentials, password: hashedPassword },
      personalInformation,
      accountInformation,
      createdAt: new Date()
    });
    return insertedId.toString();
  }

  public static async deleteUser(userId: string) {
    const tempUserCollection = await TempUsersCollection.getCollection();
    await tempUserCollection.deleteOne({ _id: new ObjectId(userId) });
  }
}

export default TempService;
