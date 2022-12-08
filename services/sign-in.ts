import clientPromise from "../lib/mongodb";

const DB_NAME = "auth";
const COLLECTION_NAME = "users";

class SignInService {
	async getUser({username, password}) {
        const client = await clientPromise;
        const database = client.db(DB_NAME);
        let user = await database.
                collection(COLLECTION_NAME).
                findOne({username, password});
        return user;
	}
}

export default new SignInService();