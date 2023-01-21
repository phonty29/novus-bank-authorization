import Collections from '../../lib/enums/Collections';
import clientPromise from '../../lib/mongodb';

class Database {
  databaseName: string;

  constructor() {
    this.databaseName = Collections.DB_NAME;
  }

  async getCollection(COLLECTION_NAME: string) {
    const client = await clientPromise;
    const database = client.db(Collections.DB_NAME);
    return database.collection(COLLECTION_NAME);
  }
}

export default new Database();
