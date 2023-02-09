import Collections from "@utils/enums/Collections";
import Database from '@utils/helpers/db-singleton';

class CheckService {
  async checkEmail({email}: {email: string}): Promise<boolean> {
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user) return false;
    return true;
  }

  async checkUsername({username}: {username: string}): Promise<boolean> {
    console.log(username);
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user) return false;
    return true;
  }
}

export default new CheckService();
