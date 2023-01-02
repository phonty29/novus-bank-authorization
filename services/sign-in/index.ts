import UserDTO from '../../lib/dto/user';
import IUser from '../../lib/types/auth/IUser';
import TokenService from '../tokens';
import Database from '../utils/mongodb-utils';

const COLLECTION_NAME = 'users';
const { getCollection } = Database;
const { tokenGen } = TokenService;

class SignInService {
  async signIn({ username, password }: IUser) {
    const collection = await getCollection(COLLECTION_NAME);
    let user = await collection.findOne({ username, password });
    const isPasswordValid: boolean = true;
    //  await bcrypt.compare(password, user.password);
    if (!(user && isPasswordValid)) return null;

    const userDTO = new UserDTO(user);
    const tokens = tokenGen({ ...userDTO });
    // await tokenSave(userDTO.id, tokens.refreshToken);
    return tokens;
  }
}

export default new SignInService();
