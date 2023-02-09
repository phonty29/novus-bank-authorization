import { Db } from 'mongodb';
import clientPromise from '../../lib/mongodb';

class Database {
  static Singleton = (() => {
    let database: Db;

    const createDB = async () => {
      let client = await clientPromise;
      return client.db(process.env.DB_NAME);
    }

    return {
      getDB: async () => {
        if (!database)
          database = await createDB();
        return database;
      }
    }
  })();

  static async getCollection(COLLECTION_NAME: string) {
    const db: Db = await Database.Singleton.getDB();
    return db.collection(COLLECTION_NAME);
  }
}

export default Database;
