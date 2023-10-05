import "./App.css";
import Body from "./components./Body";
import UserState from "./context/UserState";
import MovieState from "./context/MovieState";

function App() {
  return (
    <MovieState> 
    <UserState>
      <div className="App">
        <Body />
      </div>
    </UserState>
    </MovieState>
  );
}

export default App;
