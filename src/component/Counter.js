import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback", this.state.count);
    //   }
    // );
    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count);
  }
//   Decrement() {
//     this.setState(
//       {
//         count: this.state.count - 1,
//       },
//       () => {
//         console.log("Callback", this.state.count);
//       }
//     );
//   }
  incrementFive(){
    this.Increment()
    this.Increment()
    this.Increment()
    this.Increment()
    this.Increment()
  }

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.Increment()}>+</button>
        <button onClick={() => this.Decrement()}>-</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    );
  }
}

export default Counter;
