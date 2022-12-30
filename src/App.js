import { ComptC } from "./component/ComptC";
import PostForm from "./component/PostForm";
import { PostList } from "./component/PostList";
import { UserProvider } from "./component/UseContext";

function App() {
  return (
    <div>
      {/* <UserProvider value= 'Ezekiel'>
        <ComptC />
      </UserProvider> */}
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
