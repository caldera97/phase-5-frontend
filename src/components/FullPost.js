import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function FullPost({ LoggedInUser }) {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div className="FullPostBorder">
      <div className="FullPostContent">
        {post.img ? (
          <img className="Fullthumb" src={post.img} alt="post"></img>
        ) : null}

        <article>
          <h1>{post.content}</h1>
          {post.user ? <span>{post.user.username}</span> : null}
          <button>follow</button>
          <button className="FavButton">☆</button>
          {post.user ? (
            post.user.id === LoggedInUser.id ? (
              <>
                <button>✎</button>
                <button>🗑</button>
              </>
            ) : null
          ) : null}
        </article>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
}

export default FullPost;
