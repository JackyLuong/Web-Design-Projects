var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "alfred e. newman" };
  var newvalues = { $set: {name: "John Doe", address: "555 main st" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});