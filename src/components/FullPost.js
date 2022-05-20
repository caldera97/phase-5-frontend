import Comments from "./Comments"

function FullPost() {
    return <div className="FullPostBorder" >
    <div className="FullPostContent">
<img className="Fullthumb" src='https://loremflickr.com/500/300' alt="post"></img>
<article>
    <h1>post content</h1>
    <span>username</span>
    <button>follow</button>
    <button className="FavButton">☆</button>
</article>
    </div>
    <div className="CommentContainer">
    <Comments />
    </div>
</div>
}

export default FullPost