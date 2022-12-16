import React, { Component } from "react";

export class ClassCompt extends Component {
  render() {
    return (
      // class component uses this keyword to specify
      <div>Hello {this.props.name}</div>
    );
  }
}

export default ClassCompt;
