import PostCard from "./PostCard"
function HomePostContainer({AllPosts}) {

    const renderPosts = AllPosts.map((post) => (<div key={post.id} className="PostCard">
        <PostCard content={post.content} id={post.id} img={post.img} tags={post.tags} user_id={post.user_id} username={post.user.username}/>
    </div>));

    return <div className="PostCardContainer">
        {renderPosts}
    </div>
}

//map the posts inside a div so the styling can take effect <div className="PostCard"> <PostCard /> </div>
export default HomePostContainer
