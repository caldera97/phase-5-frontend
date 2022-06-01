import PostCard from "./PostCard";
import UserPageNav from "./UserPageNav";
function UserPosts({ posts, LoggedInUser, user }) {
  const renderPosts = posts?.map((post) => (
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
    <>
      <UserPageNav user={user} />
      <div className="PostCardContainer">
        userPosts
        {renderPosts}
      </div>
    </>
  );
}
export default UserPosts;
//map posts made by user here
