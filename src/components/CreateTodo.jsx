import React from "react";

class CreateTodo extends React.Component {
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(){

    }
  render() {
    return (
        <div> 
            <h1>To Do List</h1>
            <input type="text"></input>  
            <button onClick={this.addTodo}>Add</button> 
        </div>
    )
  }
}
 export default CreateTodo;