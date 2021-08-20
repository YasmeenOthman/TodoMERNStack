import React from "react";
import $ from "jquery";
import "../createTodo.css"
class CreateTodo extends React.Component {
    constructor(){
      super();

      this.state = {
          addedTask: "",
          completed:  false,
          priority:"",
          date:new Date()
        }
        this.getNewTask = this.getNewTask.bind(this);
        this.createTodo = this.createTodo.bind(this);
        
    }
    getNewTask(e){
      e.preventDefault();
      var newAddedTask = e.target.value;
      // console.log(newAddedTask)
      this.setState({
        addedTask:newAddedTask
      });
     
      }
    
    createTodo(){
      var that = this;
      var tasks = that.state.addedTask;
      console.log(tasks)
  
      $.ajax({
        url: '/create',
        type: 'POST',
        data: {addedTask:tasks},
        dataType: 'json',
        success: function (data) {
          console.log('task sent');
        },
        error: function (data) {
          console.error(' Failed to send the task', data);
          
        }
      });
    }
  render() {
    return (
        <div className="createTodo"> 
            <input  onChange={this.getNewTask} type="text" className="todo" placeholder="add new task"></input>  
            <button className="addBtn" onClick={this.createTodo}> Add </button> 
            
        </div>
    )
  }
}

 export default CreateTodo;