const  mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  addedTask:   String,
  completed:  {type:Boolean, default:false},
  priority: {type:String},
  date: { type: Date, default: Date.now },

});

const Todo = mongoose.model('Todo', todoSchema);

// var trial = new Todo({newTodo:"hi",completed:true});
// trial.save(function (err) {
//   if (err) return handleError(err);
//   console.log("saved")
// });
module.exports = mongoose.model('Todo',todoSchema);