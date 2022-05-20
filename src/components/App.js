import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup"
import FullPost from "./FullPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePostContainer />
      <LoginSignup />
      <FullPost />
    </div>
  );
}

export default App;
