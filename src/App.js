import Greet from "./component/Greet";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div>
      <Greet name="Diana" heroname="Wonder Woman" />
      <Welcome name="Clack" heroname="Superman" />
    </div>
  );
}

export default App;
