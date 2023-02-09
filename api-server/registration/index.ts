import Collections from "@utils/enums/Collections";
import Database from '@utils/helpers/db-singleton';
import IUserData from "@utils/types/auth/IUserData";
import { ObjectId } from 'mongodb';
import mailService from '../mail';
import TempService from '../temp';

class RegistrationService {
  async sendActivation(userData: IUserData): Promise<boolean> {
    let userId = await TempService.getUser({username: userData.credentials.username});
    if (!userId)
      userId = await TempService.addUser(userData);
    if (userId) 
      await mailService.sendActivationLink({toEmail: userData.accountInformation.email, userId});
    return true;
  }

  async activate(userId: string | string[] | undefined) {
    let tempUserCollection = await Database.getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.findOne({_id: new ObjectId(userId as string)});
    if (!tempUser) return false;
    else await TempService.deleteUser();
    let userCollection = await Database.getCollection(Collections.USERS);
    await userCollection.insertOne({...tempUser});
    return true;
  }

  async deactivate() {
    
  }
}

export default new RegistrationService();
