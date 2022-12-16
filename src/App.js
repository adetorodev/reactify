// <<<<<<< HEAD
import ParentComp from "./Component/ParentComp";
import ClassCompt from "./component/ClassCompt";
import Counter from "./component/Counter";
import FuncCompt from "./component/FuncCompt";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Message from "./component/message";


// import MyComponent from "./component/Greet";


function App() {
  return <div>
    <ParentComp />
    {/* <Counter /> */}
    {/* <Message /> */}
    {/* <FuncCompt name="Ezekiel" />
    <ClassCompt name="class Component"/> */}

    {/* <Greet name="Bruce" heroname="Batman">
      this is children props
    </Greet>
    <Greet name="Diana" heroname="Wonder woman">
      <button>Click</button>
    </Greet>
    <Greet name="Clack" heroname="Superman">
      <p>This this superman</p>
    </Greet>
    <Welcome name="Clack" heroname="Superman">
      <p>This is the children</p>
    </Welcome>
    <Welcome name="Clack" heroname="Superman">
      <h3>I am here now</h3>
    </Welcome> */}
  </div>;
// =======
// import ClassClick from "./Component/ClassClick";
// import EventBind from "./Component/EventBind";
// import FunctionClick from "./Component/FunctionClick";

// function App() {
//   return (
//     <div>
//       <EventBind />
//       {/* <ClassClick /> */}
//       {/* <FunctionClick /> */}
//     </div>
//   );
// >>>>>>> master
}

export default App;
