import React from "react";
import "../createTodo.css"
import axios from "axios";
class CreateTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      addedTask: "",
      completed: false,
      priority: "",
      date: new Date()
    }
    this.getNewTask = this.getNewTask.bind(this);
    this.createTodo = this.createTodo.bind(this);
    // this.updateTodos = this.updateTodos.bind(this)
  }

  getNewTask(addedTask) {
    this.setState({
      addedTask: addedTask
    });
  }

  createTodo(e) {
    e.preventDefault();
    var that = this;
    var tasks = that.state.addedTask;
    if (tasks === "") {
      alert("Please add your task");
      return;
    } else {
      axios.post("http://localhost:3000/create", { addedTask: tasks }).then((response) => {
        this.setState({
          addedTask: response.data.addedTask
        })
      })
    }
  }
  // updateTodos(){
  //   this.setState({

  //   })
  // }
  render() {
    return (
      <div className="createTodo">
        <input onChange={(e)=>this.getNewTask(e.target.value)} type="text" className="todo" placeholder="add new task"></input>
        <button className="addBtn"  onClick={this.createTodo}> <i className = "fa fa-plus"></i> </button>

      </div>
    )
  }
}

export default CreateTodo;