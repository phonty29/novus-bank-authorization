import UsersCollection from '@db/collections/users';
import AuthMessages from '@utils/enums/AuthMessages';
import AuthError from "@utils/helpers/auth-error";
import IUserData from "@utils/types/auth/IUserData";
import { ObjectId } from "mongodb";
import mailService from '../mail';
import TempService from '../temp';

class RegistrationService {
  public static async sendActivation(userData: IUserData) {
    const tempUser = await TempService.getUserByUsername(userData.credentials.username);
    const usersCollection = await UsersCollection.getCollection();
    const user = await usersCollection.findOne({
      'credentials.username': userData.credentials.username,
      'accountInformation.email': userData.accountInformation.email
    });
    let userId: string;
    if (user) 
      userId = user._id.toString();
    else if (tempUser) 
      userId = tempUser._id.toString();
    else
      userId = await TempService.addUser(userData);
    await mailService.sendActivationLink({toEmail: userData.accountInformation.email, userId});
    return true;
  }

  public static async activate(userId: string) {
    let tempUser = await TempService.getUserById(userId);
    let userCollection = await UsersCollection.getCollection();
    if (!tempUser) {
      let user = await userCollection.findOne({ "_id": new ObjectId(userId) });
      if (user) 
        throw AuthError.badRequest(AuthMessages.LINK_IS_ACTIVATED);
      else 
        throw AuthError.requestTimeout();
    }
    await TempService.deleteUser(tempUser._id.toString());
    const userData = {...tempUser};
    delete userData.createdAt;
    await userCollection.insertOne({...userData});
  }

  public static async deactivate() {
    
  }
}

export default RegistrationService;
