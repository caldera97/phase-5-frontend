import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup";
import FullPost from "./FullPost";
import UserPage from "./UserPage";
import PostForm from "./PostForm";

function App() {
  //useEffect to fetch all posts then set to state
  const [AllPosts, setAllPosts] = useState([]);
  const [LoggedInUser, setLoggedInUser] = useState({
    id: null,
  });

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setLoggedInUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((posts) => setAllPosts(posts));
  }, []);

  return (
    <div className="App">
      <Navbar LoggedInUser={LoggedInUser} setLoggedInUser={setLoggedInUser} />
      <Routes>
        <Route path="/" element={<HomePostContainer AllPosts={AllPosts} LoggedInUser={LoggedInUser}/>} />
        <Route
          path="/login"
          element={<LoginSignup setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/post/:postId" element={<FullPost LoggedInUser={LoggedInUser}/>} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/postForm/:EditOrNew" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
