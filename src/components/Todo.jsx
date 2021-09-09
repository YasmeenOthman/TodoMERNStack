import React from "react";
import axios from "axios";
import "../todo.css"
import EditForm from "./EditForm"
var quotes = require('../oneWordMotivation.json')

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      tasks: []
    }
    this.receivingTodos = this.receivingTodos.bind(this);
    this.handelCallback = this.handelCallback.bind(this)
  }
  /* ---- fetching data from database ----*/
  receivingTodos() {
    axios.get('http://localhost:3000/catch').then((res) => {
      this.setState({
        tasks: res.data
      })
    }).catch((err) => { throw err })
  }
  componentDidMount() {
    this.receivingTodos()
  }
  /*--- handle the update request in frontend --- */
  editTask(e, id) {
    var currentTask = this.state.tasks.find((task) => {
      return task._id === id;
    });
    this.state.addedTask = currentTask
    this.setState({
      isEditing: true
    })
  }
  /*------ update the state from the child component-----*/
  handelCallback(childData) {
    
    this.state.tasks.map((task) => {
      if (task._id === childData.task._id) {
        task.addedTask = childData.task.addedTask;
      }
      this.setState({
        tasks: this.state.tasks,
        isEditing: childData.isEditing
      })
    })
    /*----send the update  task to the server via put request method ------*/
    axios.put(`http://localhost:3000/edit/${childData.task._id}`, childData).then((res) => {
      console.log(res.data)
    })

  }

  /*--- handle the delete request in frontend --- */
  deleteTask(e, id) {
    console.log(id)
    if (window.confirm("Are you sure?")) {
      axios.delete(`http://localhost:3000/delete/${id}`).then(() => {
        var tasksAfterDelete = this.state.tasks.filter((taskId) => {

          return taskId !== id;
        })
        this.setState({
          tasks: tasksAfterDelete
        })
      })
    }
  }
  /*----- strike through text when completed------*/
  // completed(e){
  //   var element = e.target;
  //   element.classList.toggle("crossed-line")

  // }
  render() {
    if (this.state.isEditing) {
      let props = {
        task: this.state.addedTask,
        isEditing: this.state.isEditing
      }
      return (
        <div>
          <EditForm parentCallback={this.handelCallback} {...props} />
        </div>
      )
    } else {
      if (this.state.tasks.length) {
        return (
          <div className="taskContainer">
            {this.state.tasks.map((task) => {
              return (
                <div key={task._id}>
                  {/* <h6 className = "todoHeader">Todo</h6> */}
                  <p className="task"> {task.addedTask} </p>
                  <button className="Btn" id="edit" onClick={(e) => this.editTask(e, task._id)}><i className="fa fa-edit"></i>
                  </button> <span> </span>
                  <button className="Btn" id="delete" onClick={(e) => this.deleteTask(e, task._id)}><i className="fa fa-trash"></i>
                  </button>
                  <span> </span>
                  {/* <button className="Btn"  title="Check if completed"><i className="fa fa-check"></i></button> */}
                </div>
              )
            })}
          </div>
        )
      } else {
        return (
          <div className="animateLoading">No Tasks to be accomplished ...</div>
        )
      }
    }

  }
}
export default Todos;