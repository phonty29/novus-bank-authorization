import Collections from "../../lib/enums/Collections";
import IUserData from "../../lib/types/auth/IUserData";
import Database from '../utils/mongodb-utils';

const { getCollection } = Database;

class SignUpService {
  async sendActivation(body: IUserData) {
    const {credentials, personalInformation, accountInformation, isActivated} = body;
    let tempUserCollection = await getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUserCollection.insertOne({
      credentials, 
      personalInformation, 
      accountInformation, 
      isActivated
    });
    return `Successfully signed up to temp_users. User is ${tempUser}`;
  }

  async checkEmail({email}: {email: string}) {
    let userCollection = await getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user)
      return false;
    return true;
  }

  async checkUsername({username}: {username: string}) {
    let userCollection = await getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user)
      return false;
    return true;
  }
}

export default new SignUpService();
