import UsersCollection from '@db/collections/users';
import AuthError from "@utils/helpers/auth-error";
import IUserData from "@utils/types/auth/IUserData";
import { ObjectId } from "mongodb";
import mailService from '../mail';
import TempService from '../temp';

class RegistrationService {
  public static async sendActivation(userData: IUserData) {
    // реши как лучше отправлять через jwt или айдишник, ульби отправил просто рандомную ссылку
    // значит перед отправкой я проверю, есть ли такой айдишник в коллекции пользователей и есть ли такой айдишник в коллекции временных пользователей
    // потому что может случиться так, что я активировал пользователя по ссылке. Она исчезнет с коллекции временных пользователей. И эти же данные отправятся на почту во второй раз
    // при этом в этот раз образуется новый айдишник для того же пользователя поэтому проверю коллекцию постоянных пользователей по всем данным. 
    // но для начала проверь образуются ли лишние данные в коллекции временных пользователей
    const tempUser = await TempService.getUserByUsername(userData.credentials.username);
    let userId: string;
    if (tempUser) 
      userId = tempUser._id.toString();
    else 
      userId = await TempService.addUser(userData);
    await mailService.sendActivationLink({toEmail: userData.accountInformation.email, userId});
    return true;
  }

  public static async activate(userId: string) {
    // пока ничего не активируй
    let tempUser = await TempService.getUserById(userId);
    let userCollection = await UsersCollection.getCollection();
    if (!tempUser) {
      let user = await userCollection.findOne({ "_id": new ObjectId(userId) });
      if (user) 
        throw AuthError.badRequest("Аккаунт уже активирован по этой ссылке");
      else 
        throw AuthError.requestTimeout();
    }
    await TempService.deleteUser(tempUser._id.toString());
    await userCollection.insertOne({...tempUser});
    return true;
  }

  public static async deactivate() {
    
  }
}

export default RegistrationService;
