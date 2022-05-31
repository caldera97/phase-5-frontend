import { useState, useEffect } from "react";
import PostCard from "./PostCard";
function Following({ LoggedInUser}) {
    const [posts, setPosts] = useState([]);
    function getPosts() {
        fetch(`http://localhost:3000/following/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "follower_id": parseInt(LoggedInUser.id),
          }),
        })
        .then((r) => r.json())
        .then((followPosts) => setPosts(followPosts))
    }

    useEffect(() => getPosts(), []);

    const renderPosts = posts[0] ? posts[0].posts?.map((post) => (
        <div key={post.id} className="PostCard">
          <PostCard
            LoggedInUser={LoggedInUser}
            content={post.content}
            id={post.id}
            img={post.img}
            tags={post.tags}
            user_id={post.user_id}
            username={post ? post.user.username : null}
          />
        </div>
      )) : null;


    return <div className="PostCardContainer">This is the following page
    {renderPosts}</div>;
}

export default Following;