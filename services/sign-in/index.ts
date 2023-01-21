import bcrypt from 'bcrypt';
import UserDTO from '../../lib/dto/user';
import Collections from '../../lib/enums/Collections';
import ICredentials from '../../lib/types/auth/ICredentials';
import TokenService from '../tokens';
import Database from '../utils/mongodb-utils';

const { getCollection } = Database;
const { tokenGen } = TokenService;

class SignInService {
  async signIn({ username, password }: ICredentials) {
    const tempUsersCollection = await getCollection(Collections.TEMP_USERS);
    let tempUser = await tempUsersCollection.findOne({ "credentials.username": username });
    if (!tempUser) return null;
    const isPasswordValid: boolean = await bcrypt.compare(password, tempUser.credentials.password);
    if (!isPasswordValid) return null;
    const userDTO = new UserDTO(tempUser);
    const tokens = tokenGen({ ...userDTO });
    // await tokenSave(userDTO.id, tokens.refreshToken);
    return tokens;
  }
}

export default new SignInService();
