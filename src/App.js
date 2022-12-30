import { ComptC } from "./component/ComptC";
import { UserProvider } from "./component/UseContext";

function App() {
  return (
    <div>
      <UserProvider value= 'Ezekiel'>
        <ComptC />
      </UserProvider>
    </div>
  );
}

export default App;
