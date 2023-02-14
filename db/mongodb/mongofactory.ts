import MongoDB from "./mongoutils";

var database: MongoDB;

class MongoFactory {
    public static initDb() {
        console.log(database);
        if (!database) {
            console.log("INIT DB");
            database = new MongoDB();
        }
        return database;
    }
}

export default MongoFactory;