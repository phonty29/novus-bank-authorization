import Collections from "@utils/enums/Collections";
import ExpireTime from "@utils/enums/ExpireTime";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

const Singleton = (() => {
    let tempUsersCollection: Collection<Document>;
  
    const createCollection = async () => {
      const collection = await Database.getCollection(Collections.TEMP_USERS);
      collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: ExpireTime.TEMP_USERS as number });
      console.log("TEMP USERS COLLECTION INITIALISED ONCE AGAIN. THAT'S BAD");
      return collection;
    }
  
    return {
      getTempUsersCollection: async () => {
        if (!tempUsersCollection)
            tempUsersCollection = await createCollection();
        return tempUsersCollection;
      }
    }
})();

class TempUsersCollection {
    public static async getCollection() {
        const collection = await Singleton.getTempUsersCollection();
        return collection;
    }
}

export default TempUsersCollection;