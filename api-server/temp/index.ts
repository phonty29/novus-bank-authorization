import Collections from "@utils/enums/Collections";
import Database from '@utils/helpers/db-singleton';
import IUserData from "@utils/types/auth/IUserData";
import bcrypt from 'bcrypt';

class TempService {
  async getUser({username}: {username: string}) {
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.findOne({ "credentials.username": username });
    if (!tempUser) return false;
    console.log(tempUser);
    return tempUser._id.toString();
  }

  async addUser(userData: IUserData) {
    const {credentials, personalInformation, accountInformation} = userData;
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    let hashedPassword = await bcrypt.hash(credentials.password, 7);
    let {insertedId} = await tempUserCollection.insertOne({
      credentials: {...credentials, password: hashedPassword}, 
      personalInformation, 
      accountInformation
    });
    if (!insertedId) return false;
    return insertedId.toString();
  }

  async deleteUser() {
    
  }
}

export default new TempService();
