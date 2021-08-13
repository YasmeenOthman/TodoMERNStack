import React from "react";
import $ from "jquery";
class CreateTodo extends React.Component {
    constructor(){
      super();

      this.state = {
          addedTask:   null,
          completed:  false,
          priority:"high",
          date:new Date()
        }
        this.addTodo = this.addTodo.bind(this);
        this.getNewTask = this.getNewTask.bind(this);
    }
    getNewTask(e){
      // e.preventDefault();
      var newAddedTask = e.target.value;
      this.setState({
        addedTask:newAddedTask
      });
     
      }
    
    addTodo(){
   
      $.ajax({
        url:'/create',
        method:'POST',
        dataType:'application/json',
        success:function(data){
          console.log("todos saved successfully");
        },
        error:function(err) {
          console.log(err)
        }
     })

    }
  render() {
    return (
        <div> 
            <h1>To Do List</h1>
            <input  onChange={this.getNewTask} type="text" className="todo" placeholder="add new task"></input>  
            <button onClick={this.addTodo}>Add</button> 
        </div>
    )
  }
}

 export default CreateTodo;