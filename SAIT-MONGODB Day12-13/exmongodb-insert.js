var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "alfred e. newman", address: "unknown" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});