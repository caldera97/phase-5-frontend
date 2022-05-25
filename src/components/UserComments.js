import Comment from "./Comment";

function UserComments({ comments, LoggedInUser }) {
  const deleteComment = (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };

  const editComment = (commentobj) => {
    fetch(`http://localhost:3000/comments/${commentobj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentobj),
    }).then(() => window.location.reload());
  };

  const renderComments = comments?.map((comment) => (
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
      user comments
      {renderComments}
    </div>
  );
}

//map array of user comments here

export default UserComments;
