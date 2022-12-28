import clientPromise from '../../lib/mongodb';

const DB_NAME = 'auth';

class Database {
  async getCollection(COLLECTION_NAME: string) {
    const client = await clientPromise;
    const database = client.db(DB_NAME);
    return database.collection(COLLECTION_NAME);
  }
}

export default new Database();
