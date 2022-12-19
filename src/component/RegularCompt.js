import React, { Component } from 'react'

class RegularCompt extends Component {
  render() {
    console.log("Regular Component rendered")
    return (
      <div>
        Regular Componwntt {this.props.name}
      </div>
    )
  }
}

export default RegularCompt