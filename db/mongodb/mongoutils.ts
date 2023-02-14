import clientPromise from '@utils/mongodb';
import { Db } from 'mongodb';

class MongoUtils {
  public static async getDb() {
    const client = await clientPromise;
    const db: Db = client.db(process.env.DB_NAME);
    return db;
  }
}

export default MongoUtils;