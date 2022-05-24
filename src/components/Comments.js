import Comment from "./Comment";

function Comments({ comments, LoggedInUser }) {
  const renderComments = comments.map((comment) => (
    <div key={comment.id}>
      <Comment
        username={comment.user.username}
        id={comment.id}
        content={comment.content}
        user_id={comment.user_id}
        LoggedInUser={LoggedInUser}
      />
    </div>
  ));
  return (
    <div className="CommentContainer">
      <form>
        <p>Leave a Comment</p>
        <input type="text" placeholder="comment" />
        <button>comment</button>
      </form>
      {renderComments}
    </div>
  );
}

export default Comments;
