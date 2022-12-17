import React, { Component } from 'react'
import LifeCycleB from './LifeCyleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ezekiel"
      }
      console.log('LifeCyleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
  render() {
    console.log('LifeCycleA render')
    return (
        <div>
            <div>
            LifeCycleA 
        </div>
        <LifeCycleB />
        </div>
    )
  }
}

export default LifeCycleA