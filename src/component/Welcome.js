import React, { Component } from "react";

class Welcome extends Component {
    //  the render method return html content
  render() {
    return <div>
      <h1>Welcome {this.props.name} aka {this.props.heroname}</h1>
      {this.props.children}
    </div>;
  }
}

export default Welcome;
 