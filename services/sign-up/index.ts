import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import Collections from "../../lib/enums/Collections";
import IUserData from "../../lib/types/auth/IUserData";
import mailService from '../mail';
import database from '../utils/mongodb-utils';

class SignUpService {
  async sendActivation(body: IUserData): Promise<boolean> {
    const {credentials, personalInformation, accountInformation} = body;
    let tempUserCollection = await database.getCollection(Collections.TEMP_USERS);
    let hashedPassword = await bcrypt.hash(credentials.password, 7);
    let {insertedId} = await tempUserCollection.insertOne({
      credentials: {...credentials, password: hashedPassword}, 
      personalInformation, 
      accountInformation
    });
    if (!insertedId) return false;
    let userId = insertedId.toString();
    await mailService.sendActivationLink({toEmail: accountInformation.email, userId});
    return true;
  }

  async activate(userId: string | string[] | undefined) {
    let tempUserCollection = await database.getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.findOne({_id: new ObjectId(userId as string)});
    if (!tempUser) return false;
    let userCollection = await database.getCollection(Collections.USERS);
    await userCollection.insertOne({...tempUser});
    return true;
  }

  async checkEmail({email}: {email: string}): Promise<boolean> {
    let userCollection = await database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user) return false;
    return true;
  }

  async checkUsername({username}: {username: string}): Promise<boolean> {
    let userCollection = await database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user) return false;
    return true;
  }
}

export default new SignUpService();
