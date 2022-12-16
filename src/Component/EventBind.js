import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clik</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Clik</button> */}
        {/* best option */}
        {/* <button onClick={this.clickHandler}>Clik</button> */}
        {/* Also good */}
        <button onClick={this.clickHandler}>Clik</button>
      </div>
    )
  }
}

export default EventBind