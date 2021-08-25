import React from "react";
import $, { data } from "jquery";
import "../todo.css"
import axios from "axios";


class Todos extends React.Component {
  constructor(props){
    super(props);  
      this.state = {
        isFetching: false,
        tasks:[]
      }
    this.receivingTodos = this.receivingTodos.bind(this);
    this.editTask = this.editTask.bind(this);
    // this.deleteTask = this.deleteTask.bind(this)
    }
    
  receivingTodos(){
    var that = this;
    $.ajax({
      url:'/catch',
      type:'GET',
      success: function(data){
        console.log("tasks retrieved successfully data:",data)
        that.setState({
          tasks:data,
          isFetching:true
        })  
      },
      error: function(err){
        console.log(err)
      }
    })
  }
  componentDidMount(){
     this.receivingTodos()
  }

  editTask(e,id){
    axios.put(`http://localhost:3000/edit/${id}`).then(()=>{

    })
  }


  deleteTask(e,id){
    if(window.confirm("Are you sure?")){
      var that = this;
      e.preventDefault();
      axios.delete(`http://localhost:3000/delete/${id}`).then(()=>{
        that.state.tasks.filter((taskId)=>{
          return taskId !==id;
        })
      })
    }
  }

  render() {
    if (this.state.isFetching ){
      var tasks = this.state.tasks
      return (
        <div  className="taskContainer">
          {tasks.map((task)=>{
            return(
              <div > 
                <p className="task"> {task.addedTask} </p>
                <button className="Btn" id="edit" onClick={(e)=>this.editTask(e,task._id)}><i class="fa fa-edit"></i></button> <span> </span>
                <button className="Btn" id="delete" onClick={(e)=>this.deleteTask(e,task._id)}><i class="fa fa-trash"></i></button>
              </div>
            )
          })}
        </div>   
        )} else {
          return(
            <div className="animateLoading">loading tasks ...</div>
        )}
    }
}
export default Todos;