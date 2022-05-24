import Comment from "./Comment";
import { useState } from "react";

function Comments({ comments, LoggedInUser, postId, refresh }) {
  const [commentContent, setCommentContent] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: commentContent,
        user_id: LoggedInUser.id,
        post_id: postId,
      }),
    })
    .then(() => refresh())
  }

  const deleteComment = (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
        method: "DELETE"      
      })
      .then(() => refresh())
  }

  const editComment = (commentobj) => {
    fetch(`http://localhost:3000/comments/${commentobj.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentobj),
      })
      .then(() => refresh())
  }

  const renderComments = comments.map((comment) => (
    <div key={comment.id}>
      <Comment
        username={comment.user.username}
        id={comment.id}
        content={comment.content}
        user_id={comment.user_id}
        LoggedInUser={LoggedInUser}
        deleteComment={deleteComment}
        editComment={editComment}
      />
    </div>
  ));
  return (
    <div className="CommentContainer">
      <form onSubmit={e => postComment(e)}>
        <p>Leave a Comment</p>
        <input
          type="text"
          required
          placeholder="comment"
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button type="submit">comment</button>
      </form>
      {renderComments}
    </div>
  );
}

export default Comments;
