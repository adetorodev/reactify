import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
      super(props)
    this.comptRef = React.createRef()
    }
    clickHandler = () => {
        this.comptRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.comptRef} />
        <button onClick={this.clickHandler}>Focus Input </button>
      </div>
    )
  }
}

export default FocusInput