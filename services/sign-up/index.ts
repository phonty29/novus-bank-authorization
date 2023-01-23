import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import Collections from "../../lib/enums/Collections";
import IUserData from "../../lib/types/auth/IUserData";
import mailService from '../mail';
import Database from '../utils/mongodb-utils';

class SignUpService {
  async sendActivation(userData: IUserData): Promise<boolean> {
    let userId = await this.isUserInsertedInTemp({username: userData.credentials.username});
    if (!userId)
      userId = await this.insertUserInTemp(userData);
    if (userId)
      await mailService.sendActivationLink({toEmail: userData.accountInformation.email, userId});
    return true;
  }

  async isUserInsertedInTemp({username}: {username: string}) {
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.findOne({ "credentials.username": username });
    if (!tempUser) return false;
    return tempUser._id.toString();
  }

  async insertUserInTemp(userData: IUserData) {
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

  async activate(userId: string | string[] | undefined) {
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.findOne({_id: new ObjectId(userId as string)});
    if (!tempUser) return false;
    let userCollection = await Database.getCollection(Collections.USERS);
    await userCollection.insertOne({...tempUser});
    return true;
  }

  async checkEmail({email}: {email: string}): Promise<boolean> {
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user) return false;
    return true;
  }

  async checkUsername({username}: {username: string}): Promise<boolean> {
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user) return false;
    return true;
  }
}

export default new SignUpService();
