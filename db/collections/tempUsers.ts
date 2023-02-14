import Collections from "@utils/enums/Collections";
import ExpireTime from "@utils/enums/ExpireTime";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

var tempUsersCollection: Collection<Document>;

class TempUsersCollection {
    public static async getCollection() {
        if (!tempUsersCollection) {
            console.log("TEMP USERS COLLECTION INITIALISED ONCE AGAIN. THAT'S BAD");
            tempUsersCollection = await Database.getCollection(Collections.TEMP_USERS);
            tempUsersCollection.createIndex({ createdAt: 1 }, { expireAfterSeconds: ExpireTime.TEMP_USERS as number });
        }
        return tempUsersCollection;
    }
}

export default TempUsersCollection;