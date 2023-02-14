import MongoUtils from "@db/mongodb/mongoutils";
import Collections from "@utils/enums/Collections";

class UsersCollection {
  public static async getCollection() {
    const db = await MongoUtils.getDb();
    const collection = db.collection(Collections.USERS);
    return collection;
  }
}

export default UsersCollection;