function PostCard() {
    return <div className="PostBorder">
        <div className="PostContent">
    <img className="thumb" src='https://loremflickr.com/500/300' alt="post"></img>
    <article>
        <h1>post content</h1>
        <span>username</span>
        <button className="FavButton">☆</button>
        <button>✎</button>
        <button>🗑</button>
    </article>
        </div>
    </div>
}
//add click to post to bring up full post page
export default PostCard