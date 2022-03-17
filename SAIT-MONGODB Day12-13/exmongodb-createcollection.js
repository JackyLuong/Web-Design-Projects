var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, client) {
  if (err) throw err;
  var dbo = client.db("fall2021db");
  dbo.createCollection("agents", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    client.close();
  });
});