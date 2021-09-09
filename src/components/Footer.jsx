import React, { Component } from 'react';
import "../footer.css"

class Footer extends Component {
    render() {
        return (
            
                <div className = "footer" >
                <br/>
                <p> contact us:
                <a className = "links" href="https://github.com/YasmeenOthman"> <i className="fa fa-github"></i></a>
                <a className = "links" href="https://www.linkedin.com/in/yasmeen-othman-98411b19a/"><i className="fa fa-linkedin-in"></i></a>
                </p>
                <i className="fa fa-mobile"> : 00972-595121097</i> 
                <p>© 2021 Copyright:
                <a className ="email" href = "https://mail.google.com/mail/u/0/?tab=rm#inbox"> yasmeen.othman20@gmail.com</a></p>
                </div>
            
        
        );
    }
}

export default Footer;