import clientPromise from '@utils/mongodb';
import { Db } from 'mongodb';

class Database {
  private static Singleton = (() => {
    let database: Db;

    const createDB = async () => {
      console.log('DATABASE CREATED ONCE AGAIN');
      let client = await clientPromise;
      return client.db(process.env.DB_NAME);
    };

    return {
      getDB: async () => {
        if (!database) database = await createDB();
        return database;
      },
    };
  })();

  static async getCollection(COLLECTION_NAME: string) {
    const db: Db = await Database.Singleton.getDB();
    return db.collection(COLLECTION_NAME);
  }
}

export default Database;
