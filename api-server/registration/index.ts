import Collections from "@utils/enums/Collections";
import AuthError from "@utils/helpers/auth-error";
import Database from '@utils/helpers/db-singleton';
import IUserData from "@utils/types/auth/IUserData";
import { ObjectId } from "mongodb";
import mailService from '../mail';
import TempService from '../temp';

class RegistrationService {
  async sendActivation(userData: IUserData) {
    let tempUser = await TempService.getUserByUsername(userData.credentials.username);
    let userId: string;
    if (!tempUser) 
      userId = await TempService.addUser(userData);
    else 
      userId = tempUser._id.toString();
    await mailService.sendActivationLink({toEmail: userData.accountInformation.email, userId});
    return true;
  }

  async activate(userId: string) {
    let tempUser = await TempService.getUserById(userId);
    let userCollection = await Database.getCollection(Collections.USERS);
    if (!tempUser) {
      let user =await userCollection.findOne({ "_id": new ObjectId(userId) });
      if (user) 
        throw AuthError.badRequest("Аккаунт уже активирован по этой ссылке");
      throw AuthError.requestTimeout();
    }
    await TempService.deleteUser(tempUser._id.toString());
    await userCollection.insertOne({...tempUser});
    return true;
  }
}

export default new RegistrationService();
