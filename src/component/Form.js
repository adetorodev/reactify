import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "Enter Username",
         comment: "",
         topic: "React"
      }
    }
    handleUsernameChange = (event ) => {
        this.setState({
            username: event.target.value
        })
    }
    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <lable>Username</lable>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </div>
          <div>
            <label>Comment</label>
            <textarea value={this.state.comments} onChange={this.handleComment} ></textarea>
          </div>
          <div>
            <lable>Topic</lable>
            <select value={this.state.topic} onChnage={this.handleTopic}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
}

export default Form;
