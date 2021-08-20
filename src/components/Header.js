import React from "react";
import "../header.css"


class Header extends React.Component {
    constructor(props){
      super(props);  
    }
 
  render() {
  return(
      <div  className="header">
          <h3 >
          Todo list
          <span> </span>
          <i class="fas fa-bars"></i>
          </h3>
          <p>Get Your Life Organized</p>
      </div>
  )
}
}

 export default Header;