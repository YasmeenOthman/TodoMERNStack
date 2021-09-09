const mongoose = require('mongoose');
const Model = require ('./todoModel')
require("dotenv").config()
//-------------------Connection Setup-------------------------
const URI = process.env.MONGODB__CONNECTION_STRING;
mongoose.connect(URI, 
{
  useNewUrlParser: true,
   useUnifiedTopology: true
  }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB is connected")
 
});









