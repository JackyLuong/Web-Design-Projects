var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var fs = require("fs");

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fall2021db");
  fs.readFile("./agents.json", (err, data)=>{
	  var myobj = JSON.parse(data);
	  console.log(data);
  
	  dbo.collection("agents").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("documents inserted");
		db.close();
	  });
  });
});
