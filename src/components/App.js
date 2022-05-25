import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup";
import FullPost from "./FullPost";
import UserPage from "./UserPage";
import PostForm from "./PostForm";

function App() {
  //useEffect to fetch all posts then set to state
  let navigate = useNavigate();
  const [AllPosts, setAllPosts] = useState([]);
  const [toggle, setToggle] = useState(1)
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
  
  // useEffect(toggle ? setToggle(false) : undefined, [])
  return (
    <div className="App">
      <Navbar LoggedInUser={LoggedInUser} setLoggedInUser={setLoggedInUser} />
      <button onClick={() => navigate("/postForm/new/00")} className={"postButton"}>✚</button>
      <Routes>
        <Route
          path="/"
          element={
            <HomePostContainer
              AllPosts={AllPosts}
              LoggedInUser={LoggedInUser}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginSignup setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/post/:postId"
          element={<FullPost LoggedInUser={LoggedInUser} />}
        />
        <Route path="/user/:userId" element={<UserPage LoggedInUser={LoggedInUser}/>} />
        <Route
          path="/postForm/:EditOrNew/:postId"
          element={<PostForm AllPosts={AllPosts} LoggedInUser={LoggedInUser} setToggle={setToggle} toggle={toggle}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
