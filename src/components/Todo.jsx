import React from "react";
import $, { data } from "jquery";
import axios from "axios";
import EditForm from "./EditForm";
import Popup from "reactjs-popup";
import "../todo.css"

class Todos extends React.Component {
  constructor(props){
    super(props);  
      this.state = {
        isEditing: false,
        tasks:[]
      }
    this.receivingTodos = this.receivingTodos.bind(this);
    }
    
  receivingTodos(){
    var that = this;
    $.ajax({
      url:'/catch',
      type:'GET',
      success: function(data){
        // console.log("tasks retrieved successfully data:",data)
        that.setState({
          tasks:data
        });
      },
      error: function(err){
        console.log(err);
      }
    })
  }

  componentDidMount(){
    this.receivingTodos()
  }

  editTask(e,id){
    axios.put(`http://localhost:3000/edit/${id}`).then(()=>{
    var currentTask = this.state.tasks.find((task)=>{
      return task._id === id ;
    });
    // console.log(taskToEdit)
    this.state.tasks.addedTask = currentTask;
    // console.log(this.state.tasks.addedTask)
    this.setState({
      isEditing: true
    })
   
    })
  }


  deleteTask(e,id){
    if(window.confirm("Are you sure?")){
      axios.delete(`http://localhost:3000/delete/${id}`).then(()=>{
        var tasksAfterDelete = this.state.tasks.filter((taskId)=>{
          return taskId !==id;
        })
        this.setState({
          tasks:tasksAfterDelete
        })
      })
    }
  }
  render() {
    if(this.state.isEditing){
     return(
       
       <EditForm task = {this.state.tasks.addedTask}/>
      
     )
    }else{
      if (this.state.tasks.length ){
        
        return (
          <div  className="taskContainer">
            {this.state.tasks.map((task)=>{
              return(
                <div key={task._id}> 
                  <p className="task"> {task.addedTask} </p>
                  <button  className="Btn" id="edit" onClick={(e)=>this.editTask(e,task._id)}><i className="fa fa-edit"></i>
                  </button> <span> </span>
                  <button  className="Btn" id="delete" onClick={(e)=>this.deleteTask(e,task._id)}><i className="fa fa-trash"></i>
                  </button>
                </div>
              )
            })}
          </div>   
          )} else {
            return(
              <div className="animateLoading">No Tasks to be accomplished ...</div>
          )}
    }
    
    }
}
export default Todos;