import React, { Component } from 'react';
import "../footer.css"

class Footer extends Component {
    render() {
        return (
            
                <div className = "footer" >© 2021 Copyright:
                <a href = "https://mail.google.com/mail/u/0/?tab=rm#inbox"> yasmeen.othman20@gmail.com</a>
                <br/>
                <a className = "links" href="https://github.com/YasmeenOthman"><i class="fa fa-github"></i></a>
                <a className = "links" href="https://www.linkedin.com/in/yasmeen-othman-98411b19a/"><i class="fa fa-linkedin-in"></i></a>
                </div>
            
        
        );
    }
}

export default Footer;