import Collections from "@utils/enums/Collections";
import Database from "@utils/helpers/db-singleton";
import { Collection, Document } from "mongodb";

class TempUsersCollection {
  private Singleton: {
    getTempUsersCollection: () => Promise<Collection<Document>>;
  };
  private database: Database;
  
  constructor() {
    this.database = new Database();
    this.Singleton= (() => {
        let tempUsersCollection: Collection<Document>;
        let semaphore: boolean = false;
      
        const createCollection = async () => {
          const collection = await this.database.getCollection(Collections.TEMP_USERS);
          console.log("CREATE TEMP USERS COLLECTION");
          console.log(semaphore);
          return collection;
        }
      
        return {
          getTempUsersCollection: async () => {
            if (!tempUsersCollection && !semaphore) {
              tempUsersCollection = await createCollection();
              semaphore = true;
            }
            return tempUsersCollection;
          }
        }
    })();
  }

  public async getCollection() {
    const collection = await this.Singleton.getTempUsersCollection();
    return collection;
  }
}

export default TempUsersCollection;