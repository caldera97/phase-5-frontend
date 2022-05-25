import PostCard from "./PostCard";
function UserPosts({ posts, LoggedInUser }) {

  const renderPosts = posts.map((post) => (
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

  return (
    <div className="PostCardContainer">
      userPosts
      {renderPosts}
    </div>
  );
}
export default UserPosts;
//map posts made by user here
