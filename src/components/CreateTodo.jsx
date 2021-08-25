import React from "react";
import $ from "jquery";
import "../createTodo.css"
import axios from "axios";
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
      // console.log(tasks);
      axios.post("http://localhost:3000/create",{addedTask:tasks}).then((response)=>{
        that.setState({
          addedTask:response.data.addedTask
        })

      })

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