import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FullPost({ LoggedInUser }) {
  let navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  const handleClick = (e) => {
    e.preventDefault();
    e.target.className === "addFavButton"
      ? addFav(e)
      : e.target.className === "editButton"
      ? editPost(e)
      : delPost(e);
  };

  function refresh() {
    window.location.reload();
  }

  function addFav(e) {
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: LoggedInUser.id,
        post_id: post.id,
      }),
    }).then(() => refresh());
  }

  function editPost(e) {
    navigate(`/postForm/edit/${post.id}`);
  }

  function delPost(e) {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE",
    }).then(window.location.reload());
  }

  // function handleFollow(e) {
  //   console.log(LoggedInUser)
  //   fetch("http://localhost:3000/follows", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       follower_id: LoggedInUser.id,
  //       following_id: post.user.id,
  //     }),
  //   }).then(() => refresh());
  // }

  //following[0].id
  // let followButton = null;
  // if (LoggedInUser.following.forEach(e => {
  //   e.includes(post.user.id)
  // }) === true) {

  let favButton = null;

  if (LoggedInUser.favorites?.filter((e) => e.post_id === post.id).length > 0) {
    favButton = <button className="addFavButton">★</button>;
  } else {
    favButton = (
      <button className="addFavButton" onClick={handleClick}>
        ☆
      </button>
    );
  }

  return (
    <div className="FullPostBorder">
      <div className="FullPostContent">
        {post.img ? (
          <img className="Fullthumb" src={post.img} alt="post"></img>
        ) : null}
        <article>
          <h1>{post.content}</h1>
          {post.user ? (
            <a href={`/user/${post.user.id}`}>{post.user.username}</a>
          ) : null}
          {/* <button onClick={handleFollow}>follow</button> */}
          {LoggedInUser.id ? favButton : null}

          {post.user ? (
            post.user.id === LoggedInUser.id ? (
              <>
                <button className="editButton" onClick={handleClick}>
                  ✎
                </button>
                <button className="trashButton" onClick={handleClick}>
                  🗑
                </button>
              </>
            ) : null
          ) : null}
        </article>
      </div>
      <div>
        {post.comments ? (
          <Comments
            refresh={refresh}
            comments={post.comments}
            LoggedInUser={LoggedInUser}
            postId={postId}
          />
        ) : null}
      </div>
    </div>
  );
}

export default FullPost;
