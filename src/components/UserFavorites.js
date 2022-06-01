import PostCard from "./PostCard";
import UserPageNav from "./UserPageNav";

function UserFavorites({ LoggedInUser, favorites, user }) {
  const renderPosts = favorites?.map((post) => (
    <div key={post.post.id} className="PostCard">
      <PostCard
        LoggedInUser={LoggedInUser}
        content={post.post.content}
        id={post.post.id}
        img={post.post.img}
        tags={post.post.tags}
        user_id={post.post.user_id}
        username={post.post.user ? post.post.user.username : null}
      />
    </div>
  ));

  //username cant be displayed like this, fix it later

  return (
    <>
      <UserPageNav user={user} />
      <div className="PostCardContainer">
        user favorites
        {renderPosts}
      </div>
    </>
  );
}

export default UserFavorites;
