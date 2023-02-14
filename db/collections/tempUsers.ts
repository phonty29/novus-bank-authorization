import MongoFactory from "@db/mongodb/mongofactory";
import Collections from "@utils/enums/Collections";
import ExpireTime from "@utils/enums/ExpireTime";

class TempUsersCollection {
  public static async getCollection() {
    const mongoutils = MongoFactory.initDb();
    const db = await mongoutils.getDb();
    const collection = db.collection(Collections.TEMP_USERS);
    await collection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: ExpireTime.TEMP_USERS as number });
    return collection;
  }
}

export default TempUsersCollection;