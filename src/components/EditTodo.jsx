import React from "react";

class EditTodo extends React.Component {
    constructor(){
        super();
        this.EditTodo = this.EditTodo.bind(this);
    }

    addTodo(){

    }
  render() {
    return (
        <div> 
        <button onClick={this.EditTodo}> Edit </button> 
        
        </div>
    )
  }
}
 export default EditTodo;