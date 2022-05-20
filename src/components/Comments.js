import Comment from "./Comment"

function Comments() {
    return <div className="CommentContainer">
        <form>
            <p>Leave a Comment</p>
            <input type="text" placeholder="comment" />
            <button>comment</button>
        </form>
    <Comment />
    <Comment />
    </div>
}

export default Comments