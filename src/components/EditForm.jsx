import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props, "props in child")
        this.state = {
            task: {
                addedTask: this.props.task.addedTask,
                _id: this.props.task._id,
                completed: this.props.task.completed,
                priority: this.props.task.priority,
                date: this.props.task.date
            },

            isEditing: this.props.isEditing,

        }
        console.log(this.state, 1)
        this.handleEditInputChange = this.handleEditInputChange.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)

    }

    async handleEditInputChange(editedTask) {
        if(editedTask === undefined){
            alert("Do not keep it empty, instead please delet it from the main page!")
        }
        await this.setState({
            task: {
                addedTask: editedTask,
                _id: this.state.task._id,
                completed: this.state.task.completed,
                priority: this.state.task.priority,
                date: this.state.task.date
            }
        })
    }

    updateTask(e) {
        this.setState({
            isEditing: !this.state.isEditing
        })
        this.props.parentCallback(this.state)
        // console.log(this.state, "2child");
        this.cancelEdit(e)
        e.preventDefault();
    }

    async cancelEdit(e) {
        await this.setState({
            isEditing: !this.props.isEditing
        })
        this.props.parentCallback(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div key={this.state.task._id}>
                <input
                    type="text"
                    value={this.state.task.addedTask}
                    onChange={e => this.handleEditInputChange(e.target.value)}
                />
                <button type="submit" onClick={this.updateTask.bind(this)}> <i className ="fa fa-check"></i> </button>
                <button onClick={this.cancelEdit.bind(this)}> <i className ="fa fa-times"></i></button>
            </div>
        );
    }
}
export default EditForm;