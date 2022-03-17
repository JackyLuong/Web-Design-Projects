const mongo = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) =>
{
    if(err) throw err;
    const db = client.db("testdb");
    const collection = db.collection("names");
    console.log("mydb was created");
    client.close();
});