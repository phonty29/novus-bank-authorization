import MongoFactory from "@db/mongodb/mongofactory";
import Collections from "@utils/enums/Collections";

class UsersCollection {
  public static async getCollection() {
    console.log("GET COLLECTION");
    const mongoutils = MongoFactory.initDb();
    const db = await mongoutils.getDb();
    return db.collection(Collections.USERS);;
  }
}

export default UsersCollection;