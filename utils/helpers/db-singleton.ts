import clientPromise from '@utils/mongodb';
import { Db } from 'mongodb';

var db: Db;

class Database {
  public static async initDb() {
    if (db) 
      return;  
    try {
      console.log('DATABASE CREATED ONCE AGAIN. That\'s bad');
      let client = await clientPromise;
      db = await client.db(process.env.DB_NAME);
    } catch (error) {
      throw Error("500 internal server error. Cannot connect to MongoDB");
    }
  }

  public static async getCollection(COLLECTION_NAME: string) {
    if (!db) 
      this.initDb();
    return db.collection(COLLECTION_NAME);
  }
}

export default Database;
