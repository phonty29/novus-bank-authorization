import Collections from "@utils/enums/Collections";
import Database from '@utils/helpers/db-singleton';
import IUserData from "@utils/types/auth/IUserData";
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";

class TempService {
  async initTempUserCollection() {
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    tempUserCollection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 60 } );
    return tempUserCollection;
  }

  async getUserByUsername(username: string) {
    let tempUserCollection = await this.initTempUserCollection();
    let tempUser = await tempUserCollection.findOne({ "credentials.username": username });
    return tempUser;
  }

  async getUserById(userId: string) {
    let tempUserCollection = await this.initTempUserCollection();
    let tempUser = await tempUserCollection.findOne({ "_id": new ObjectId(userId) });
    return tempUser;
  }

  async addUser(userData: IUserData) {
    const {credentials, personalInformation, accountInformation} = userData;
    let tempUserCollection = await this.initTempUserCollection();
    let hashedPassword = await bcrypt.hash(credentials.password, 7);
    let {insertedId} = await tempUserCollection.insertOne({
      credentials: {...credentials, password: hashedPassword}, 
      personalInformation, 
      accountInformation
    });
    return insertedId.toString();
  }

  async deleteUser(userId: string) {
    let tempUserCollection = await this.initTempUserCollection();
    await tempUserCollection.deleteOne({ "_id": new ObjectId(userId) });
  }
}

export default new TempService();
