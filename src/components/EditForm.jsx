import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            addedTask :this.props.task.addedTask
        }
       
        this.handleEditInputChange = this.handleEditInputChange.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }

    handleEditInputChange(editedTask){
        this.setState({
            addedTask:editedTask
        })
    }

    updateTask(){
        console.log("updated successfully");
        
    }
    render() {
        return (
            <div key={this.props.task._id}>
                <input 
                type = "text" 
                value={this.state.addedTask}
                onChange={e=>this.handleEditInputChange(e.target.value)}
                />
                <button type="submit" onClick = {this.updateTask}> Update </button>
                {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
                {/* <button onClick={() => setIsEditing(false)}>Cancel</button> */}
                <button>Cancel</button>
            </div>
        );
    }
}

export default EditForm;