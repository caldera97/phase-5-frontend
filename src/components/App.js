import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup"
import FullPost from "./FullPost";
import UserPage from "./UserPage";
import PostForm from "./PostForm";

function App() {
  //useEffect to fetch all posts then set to state
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePostContainer />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/post/:postId" element={<FullPost />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/postForm/:EditOrNew" element={<PostForm />} />
      {/* <HomePostContainer /> */}
      {/* <LoginSignup /> */}
      {/* <FullPost /> */}
      {/* <UserPage /> */}
      {/* <PostForm /> */}
      </Routes>
    </div>
  );
}

export default App;
