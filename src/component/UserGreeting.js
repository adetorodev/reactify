import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginIn: true,
    };
  }
  render() {
    // return this.state.isLoginIn ? (
    //   <div>Welcome Ezekiel</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    return this.state.isLoginIn && <div>Welcome Ezekiel</div>
    
    // let message
    // if(this.state.isLoginIn){
    //     message = <div>Welcome Ezekiel</div>
    // }else{
    //     message= <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoginIn){
    //     return (
    //         <div>Welcome Ezekiel</div>
    //     )
    // }else{
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>Welcome Ezekiel</div>
    //     <div>Welcome Quest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
