import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert("hello" + " " + this.state.parentName +" "+ 'from' +" "+ childName)
    }

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp