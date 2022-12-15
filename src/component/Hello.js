import React from "react";

const Hello = () => {
  //   return (
    //  with JSX
  //     <div><h1>Hello ezekiel</h1></div>
  //   )
//   without JSX
  return React.createElement(
    "div",
    {className: "aleert"},
    React.createElement("h1", {id: 'hello'}, "Hallo Ezekiel")
  );
};

export default Hello;
