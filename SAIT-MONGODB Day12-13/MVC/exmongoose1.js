// Require the mongoose module
var mongoose = require('mongoose');
// Set up a mongoose connection
var mongoDB = 'mongodb://127.0.0.1/travelexperts';
mongoose.connect(mongoDB, { useNewUrlParser: true,
    useUnifiedTopology: true });
// Get the connection
var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  // we're connected!
});

app.post("/create-post", postController.createPost);