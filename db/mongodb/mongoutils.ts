import clientPromise from '@utils/mongodb';
import { Db } from 'mongodb';

class MongoDB {
  private Singleton: { getDB: () => Promise<Db>; };
  
  constructor() {
    this.Singleton = (() => {
      let database: Db;
      let semaphore: boolean = false;
    
      const createDatabase = async () => {
        const client = await clientPromise;
        console.log("CREATE DATABASE");
        return client.db(process.env.DB_NAME);
      }
    
      return {
        getDB: async () => {
          if (!database && !semaphore) {
            database = await createDatabase();
            semaphore = true;
          }
          return database;
        }
      }
    })();
  }

  public async getDb() {
    const db: Db = await this.Singleton.getDB();
    return db;
  }
}

export default MongoDB;

//amedov.bekmuhamet@gmail.com
//ASdf#1234