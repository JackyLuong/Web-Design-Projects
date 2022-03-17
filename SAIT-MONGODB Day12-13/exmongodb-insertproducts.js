var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = JSON.parse('[{ "_id": 154, "name": "Chocolate Heaven" }, { "_id": 155, "name": "Tasty Lemons" }, { "_id": 156, "name": "Vanilla Dreams" }]');
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("documents inserted");
    db.close();
  });
});