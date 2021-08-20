const  mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  addedTask:  {type:String} ,
  completed:  {type:Boolean, default:false},
  priority: {type:String,default: ""},
  date: { type: Date, default: Date.now },
 

});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = mongoose.model('Todo',todoSchema);