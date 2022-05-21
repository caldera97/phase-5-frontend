import PostCard from "./PostCard";

function UserFavorites() {
    return <div className="PostCardContainer">
        user favorites
        <PostCard />
        <PostCard />
    </div>
}

export default UserFavorites
//map over array of user favorited posts here