import MongoUtils from "@db/mongodb/mongoutils";
import Collections from "@utils/enums/Collections";
import ExpireTime from "@utils/enums/ExpireTime";

class TempUsersCollection {
  public static async getCollection() {
    const db = await MongoUtils.getDb();
    const collection = db.collection(Collections.TEMP_USERS);
    await collection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: ExpireTime.TEMP_USERS as number });
    return collection;
  }
}

export default TempUsersCollection;