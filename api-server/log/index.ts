import UsersCollection from '@db/collections/users';
import AuthMessages from '@utils/enums/AuthMessages';
import AuthError from '@utils/helpers/auth-error';
import bcrypt from 'bcrypt';
import ICredentials from '../../utils/types/auth/ICredentials';
import ITokens from '../../utils/types/auth/ITokens';
import tokenService from '../tokens';

class LogService {
  public async in({ username, password }: ICredentials) {
    const usersCollection = await UsersCollection.getCollection();
    let user = await usersCollection.findOne({ "credentials.username": username });
    if (!user)
      throw AuthError.badRequest(AuthMessages.LOG_IN_INCORRECT);
    const isPasswordValid: boolean = await bcrypt.compare(password, user.credentials.password);
    if (!isPasswordValid) 
      throw AuthError.badRequest(AuthMessages.LOG_IN_INCORRECT);
    const tokens: ITokens = tokenService.generateTokens({ username, password });
    return tokens;
  }

  public async out() {
    
  }
}

export default new LogService();
