import React, { Component, PureComponent} from 'react'
import RegularCompt from './RegularCompt'
import PureCompt from './PureComponent'

// class ParentCompt extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: "Ezekiel"
//       }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 name: "Ezekiel"
//             })
//         }, 2000)
//     }
//   render() {
//     console.log("**** parent Component rendered********")
//     return (
//       <div>
//         Pure Compoent
//         <RegularCompt name={this.state.name} />
//         <PureCompt name={this.state.name} />
//       </div>
//     )
//   }
// }


//  No re-render
// dont mutate object or array 
class ParentCompt extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Ezekiel"
      }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Ezekiel"
            })
        }, 2000)
    }
  render() {
    console.log("**** parent Component rendered********")
    return (
      <div>
        Pure Compoent
        <RegularCompt name={this.state.name} />
        <PureCompt name={this.state.name} />
      </div>
    )
  }
}

export default ParentCompt