import bcrypt from 'bcrypt';
import Collections from "../../lib/enums/Collections";
import IUserData from "../../lib/types/auth/IUserData";
import Database from '../utils/mongodb-utils';

const { getCollection } = Database;

class SignUpService {
  async sendActivation(body: IUserData) {
    const {credentials, personalInformation, accountInformation} = body;
    let tempUserCollection = await getCollection(Collections.TEMP_USERS);
    let hashedPassword = await bcrypt.hash(credentials.password, 7);
    let tempUser = await tempUserCollection.insertOne({
      credentials: {...credentials, password: hashedPassword}, 
      personalInformation, 
      accountInformation
    });
    return `Successfully signed up to temp_users. User is ${{...tempUser}}`;
  }

  async checkEmail({email}: {email: string}): Promise<boolean> {
    let userCollection = await getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user)
      return false;
    return true;
  }

  async checkUsername({username}: {username: string}): Promise<boolean> {
    let userCollection = await getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user)
      return false;
    return true;
  }
}

export default new SignUpService();
