import ClassCompt from "./component/ClassCompt";
import FuncCompt from "./component/FuncCompt";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";


// import MyComponent from "./component/Greet";


function App() {
  return <div>
    {/* <FuncCompt name="Ezekiel" />
    <ClassCompt name="class Component"/> */}

    <Greet name="Bruce" heroname="Batman">
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
    </Welcome>
  </div>;
}

export default App;
