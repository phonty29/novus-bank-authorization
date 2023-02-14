import clientPromise from '@utils/mongodb';
import { Db } from 'mongodb';

const Singleton = (() => {
  let database: Db;

  const createDatabase = async () => {
    const client = await clientPromise;
    console.log("CREATE DATABASE");
    return client.db(process.env.DB_NAME);
  }

  return {
    getDB: async () => {
      if (!database)
        database = await createDatabase();
      return database;
    }
  }
})();

class Database {
  public static async getCollection(COLLECTION_NAME: string) {
    const db: Db = await Singleton.getDB();
    return db.collection(COLLECTION_NAME);
  }
}

export default Database;
