import bcrypt from 'bcrypt';
import Collections from '../../utils/enums/Collections';
import database from '../../utils/helpers/db-singleton';
import ICredentials from '../../utils/types/auth/ICredentials';
import ITokens from '../../utils/types/auth/ITokens';
import tokenService from '../tokens';

class LogService {
  async in({ username, password }: ICredentials) {
    const usersCollection = await database.getCollection(Collections.USERS);
    let user = await usersCollection.findOne({ "credentials.username": username });
    if (!user) return null;
    const isPasswordValid: boolean = await bcrypt.compare(password, user.credentials.password);
    if (!isPasswordValid) return null;
    const tokens: ITokens = tokenService.generateTokens({ username, password });
    return tokens;
  }

  async out() {
    
  }
}

export default new LogService();