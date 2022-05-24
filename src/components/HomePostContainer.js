import PostCard from "./PostCard";
import { useEffect } from "react";
function HomePostContainer({ AllPosts, LoggedInUser, toggle }) {
  const postToggle = 1

  useEffect(() => postToggle === toggle ? undefined : (window.location.reload()), [toggle])

  const renderPosts = AllPosts.map((post) => (
    <div key={post.id} className="PostCard">
      <PostCard
        LoggedInUser={LoggedInUser}
        content={post.content}
        id={post.id}
        img={post.img}
        tags={post.tags}
        user_id={post.user_id}
        username={post.user.username}
      />
    </div>
  ));

  return <div className="PostCardContainer">{renderPosts}</div>;
}

//map the posts inside a div so the styling can take effect <div className="PostCard"> <PostCard /> </div>
export default HomePostContainer;
