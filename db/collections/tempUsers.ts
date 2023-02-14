import Collections from "@utils/enums/Collections";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

var tempUsersCollection: Collection<Document>;

class TempUsersCollection {
    public static async getCollection() {
        if (!tempUsersCollection) {
            console.log("TEMP USERS COLLECTION INITIALISED ONCE AGAIN. THAT'S BAD");
            tempUsersCollection = await Database.getCollection(Collections.TEMP_USERS);
            tempUsersCollection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 60 });
        }
        return tempUsersCollection;
    }
}

export default TempUsersCollection;