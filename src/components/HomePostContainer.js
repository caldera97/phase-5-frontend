import PostCard from "./PostCard"
function HomePostContainer() {
    return <div className="PostCardContainer">
        <div className="PostCard"><PostCard /></div>
        <div className="PostCard"><PostCard /></div>
        <div className="PostCard"><PostCard /></div>
        <div className="PostCard"><PostCard /></div>
        <div className="PostCard"><PostCard /></div>
        <div className="PostCard"><PostCard /></div>
    </div>
}

//map the posts inside a div so the styling can take effect <div className="PostCard"> <PostCard /> </div>
export default HomePostContainer