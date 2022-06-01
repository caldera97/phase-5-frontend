import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HomePostContainer from "./HomePostContainer";
import LoginSignup from "./LoginSignup";
import FullPost from "./FullPost";
import UserPage from "./UserPage";
import PostForm from "./PostForm";
import SearchPostContainer from "./SearchPostContainer";
// import Following from "./Following";

import UserComments from "./UserComments";
import UserFavorites from "./UserFavorites";
import UserPosts from "./UserPosts";

function App() {
  let navigate = useNavigate();
  const [AllPosts, setAllPosts] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [LoggedInUser, setLoggedInUser] = useState({
    id: null,
  });

  const [user, setUser] = useState("");

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
      {LoggedInUser.id ? (
        <button
          onClick={() => navigate("/postForm/new/00")}
          className={"postButton"}
        >
          ✚
        </button>
      ) : null}
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
          path="/search/:searchTerm"
          element={<SearchPostContainer LoggedInUser={LoggedInUser} />}
        />
        <Route
          path="/post/:postId"
          element={<FullPost LoggedInUser={LoggedInUser} />}
        />
        <Route
          path="/user/:userId/*"
          element={
            <UserPage
              LoggedInUser={LoggedInUser}
              setUser={setUser}
              user={user}
            />
          }
        />
        <Route
          path="/postForm/:EditOrNew/:postId"
          element={
            <PostForm
              AllPosts={AllPosts}
              LoggedInUser={LoggedInUser}
              setToggle={setToggle}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/user/:userId/posts"
          element={
            <UserPosts
              posts={user.posts}
              LoggedInUser={LoggedInUser}
              user={user}
            />
          }
        />
        <Route
          path="/user/:userId/comments"
          element={
            <UserComments
              comments={user.comments}
              LoggedInUser={LoggedInUser}
              user={user}
            />
          }
        />
        <Route
          path="/user/:userId/favorites"
          element={
            <UserFavorites
              favorites={user.favorites}
              LoggedInUser={LoggedInUser}
              user={user}
            />
          }
        />
        {/* <Route
          path="/following"
          element={
            <Following LoggedInUser={LoggedInUser}/>
            
          } />*/}
      </Routes>
    </div>
  );
}

export default App;
