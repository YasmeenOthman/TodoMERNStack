const mongoose = require('mongoose');
const Model = require ('./todoModel')
//-------------------Connection Setup-------------------------

mongoose.connect('mongodb://localhost:27017/todo', 
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









//to start the db terminal brew services start mongodb-community@4.4