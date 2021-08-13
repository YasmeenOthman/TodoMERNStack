import React from "react";

class ToDos extends React.Component {
  constructor(){
    super();

    this.state = {
        addedTask:   null,
        completed:  false,
        priority:"high",
        date:new Date()
      }
       
    }

   
  render() {
    return (
        <div> 
       
        </div>
    )
  }
}
 export default <ToDos></ToDos>;