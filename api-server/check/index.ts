import UsersCollection from "@db/collections/users";
import AuthMessages from "@utils/enums/AuthMessages";
import AuthError from "@utils/helpers/auth-error";

class CheckService {
  public static async checkEmail({email}: {email: string}) {
    const usersCollection = await UsersCollection.getCollection();
    let user = await usersCollection.findOne({ "accountInformation.email": email });
    if (user) 
      throw AuthError.conflict(AuthMessages.EMAIL_UNAVAILABLE);
    return true;
  }
  
  public static async checkUsername({username}: {username: string}) {
    let usersCollection = await UsersCollection.getCollection();
    let user = await usersCollection.findOne({ "credentials.username": username });
    if (user) 
      throw AuthError.conflict(AuthMessages.USERNAME_UNAVAILABLE);
    return true;
  }
}

export default CheckService;
