import React from "react";
import $ from "jquery";
import "../todo.css"


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

  editTask(){

  }
  deleteTask(e,id){
    var that = this;
    e.preventDefault();
    const taskId = { id };
    $.ajax({
      url:`/delete/:${taskId}`,
      method:"DELETE",
      success:function(){
        alert('Task removed Successfully');
        that.setState{

        }
      },
      error:function(err){
        console.log(err)
      }

    })
  }

  render() {
    if (this.state.isFetching ){
      var tasks = this.state.tasks
      console.log(tasks)
    return (
      <div  className="taskContainer">
        {tasks.map((task)=>{
          return(
            <div > 
              <p className="task"> {task.addedTask} </p>
              <button className="Btn" id="edit" onClick={this.editTask}><i class="fa fa-edit"></i></button> <span> </span>
              
              <button className="Btn" id="delete" onClick={(e)=>this.deleteTask(e,task._id)}><i class="fa fa-trash"></i></button>
              
            </div>
          )
          })
        }
      </div>   
      )
    } else {
      return(
        <div>loading tasks ...</div>
      )}
  }
}
export default Todos;