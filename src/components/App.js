import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup"
import FullPost from "./FullPost";
import UserPage from "./UserPage";
import PostForm from "./PostForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePostContainer />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/post" element={<PostForm />} />
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
