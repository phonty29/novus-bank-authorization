import Collections from "@utils/enums/Collections";
import AuthError from "@utils/helpers/auth-error";
import Database from '@utils/helpers/db-singleton';

class CheckService {
  async checkEmail({email}: {email: string}) {
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "accountInformation.email": email });
    if (user) 
      throw AuthError.conflict("Данный email недоступен. Пожалуйста выберите другой.");
    return true;
  }

  async checkUsername({username}: {username: string}) {
    let userCollection = await Database.getCollection(Collections.USERS);
    let user = await userCollection.findOne({ "credentials.username": username });
    if (user) 
      throw AuthError.conflict("Данный username недоступен. Пожалуйста выберите другой.");
    return true;
  }
}

export default new CheckService();
