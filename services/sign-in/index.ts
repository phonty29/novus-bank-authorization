import User from "../../types/auth/users";
import Database from '../utils/mongodb-utils';

const COLLECTION_NAME = "users";
const {getCollection} = Database;

class SignInService {
	async getUser({username, password}: User) {
                const collection = await getCollection(COLLECTION_NAME);
                let user = await collection.findOne({username});
                const isPasswordValid: boolean = true;
					//  await bcrypt.compare(password, user.password);
					if (! (user && true)) throw Error;
					return user;
	}
}

export default new SignInService();