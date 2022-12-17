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
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'StreetCoder'
        })
    }
  render() {
    console.log('LifeCycleA render')
    return (
        <div>
            <div>
            LifeCycleA 
            <button onClick={this.changeState} >Chnage State</button>
            <LifeCycleB />
        </div>
        
        </div>
    )
  }
}

export default LifeCycleA