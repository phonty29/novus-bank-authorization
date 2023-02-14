import Collections from "@utils/enums/Collections";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

class UsersCollection {
  private Singleton: {
    getUsersCollection: () => Promise<Collection<Document>>;
  };
  private database: Database;
  
  constructor() {
    this.database = new Database();
    this.Singleton= (() => {
        let usersCollection: Collection<Document>;
        let semaphore: boolean = false;
      
        const createCollection = async () => {
          const collection = await this.database.getCollection(Collections.TEMP_USERS);
          console.log("CREATE USERS COLLECTION");
          console.log(semaphore);
          return collection;
        }
      
        return {
          getUsersCollection: async () => {
            if (!usersCollection && !semaphore) {
              usersCollection = await createCollection();
              semaphore = true;
            }
            return usersCollection;
          }
        }
    })();
  }

  public async getCollection() {
    const collection = await this.Singleton.getUsersCollection();
    return collection;
  }
}

export default UsersCollection;