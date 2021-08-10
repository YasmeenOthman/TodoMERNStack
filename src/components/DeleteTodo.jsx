import React from "react";

class DeleteTodo extends React.Component {
    constructor(){
        super();
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(){

    }
  render() {
    return (
        <div> 
        <button onClick={this.deleteTodo}> Delete </button> 
        
        </div>
    )
  }
}
 export default DeleteTodo;