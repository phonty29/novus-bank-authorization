import Collections from "@utils/enums/Collections";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

const Singleton = (() => {
    let usersCollection: Collection<Document>;
  
    const createCollection = async () => {
      const collection = await Database.getCollection(Collections.TEMP_USERS);
      console.log("USERS COLLECTION INITIALISED ONCE AGAIN. THAT'S BAD");
      return collection;
    }
  
    return {
      getUsersCollection: async () => {
        if (!usersCollection)
        usersCollection = await createCollection();
        return usersCollection;
      }
    }
})();

class UsersCollection {
    public static async getCollection() {
        const collection = await Singleton.getUsersCollection();
        return collection;
    }
}

export default UsersCollection;