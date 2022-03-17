var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fall2021db";

mongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, conn) {
  if (err) throw err;
  console.log("Database is created!");  
  conn.close();  
});  