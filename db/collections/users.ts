import Collections from "@utils/enums/Collections";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

var usersCollection: Collection<Document>;

class UsersCollection {
    public static async getCollection() {
        if (!usersCollection) {
            console.log("USERS COLLECTION INITIALISED ONCE AGAIN. THAT'S BAD");
            usersCollection = await Database.getCollection(Collections.USERS);
        }
        return usersCollection;
    }
}

export default UsersCollection;