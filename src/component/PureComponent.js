import React, { PureComponent } from 'react'

class PureCompt extends PureComponent {
  render() {
    console.log("pure Component rendered")
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureCompt