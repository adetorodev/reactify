import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ezekiel"
      }
      console.log('LifeCyleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
  render() {
    console.log('LifeCycleB render')
    return (
        
        <div>
            LifeCycleB 
        </div>
    )
  }
}

export default LifeCycleB