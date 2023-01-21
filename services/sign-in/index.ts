import bcrypt from 'bcrypt';
import Collections from '../../lib/enums/Collections';
import ICredentials from '../../lib/types/auth/ICredentials';
import tokenService from '../tokens';
import database from '../utils/mongodb-utils';

class SignInService {
  async signIn({ username, password }: ICredentials) {
    const usersCollection = await database.getCollection(Collections.USERS);
    let user = await usersCollection.findOne({ "credentials.username": username });
    if (!user) return null;
    const isPasswordValid: boolean = await bcrypt.compare(password, user.credentials.password);
    if (!isPasswordValid) return null;
    const tokens = tokenService.generateTokens({ id: user._id });
    // await tokenSave(userDTO.id, tokens.refreshToken);
    return tokens;
  }
}

export default new SignInService();
