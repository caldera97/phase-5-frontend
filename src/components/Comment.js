import { useState } from "react";
function Comment({
  id,
  content,
  username,
  user_id,
  LoggedInUser,
  deleteComment,
  editComment,
}) {
  const [editedComment, setEditedComment] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    const commentobj = {
      content: editedComment,
      id: id,
    };
    editComment(commentobj);
  };

  return (
    <div className="CommentSingle">
      <a href={`/user/${user_id}`}>{username}</a>
      <div>{content}</div>
      {user_id === LoggedInUser.id ? (
        <div>
          <button onClick={() => setShowEdit(!showEdit)}>✎</button>
          <button onClick={() => deleteComment(id)}>🗑</button>
        </div>
      ) : null}

      {showEdit ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <input
            defaultValue={content}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button type="submit">edit</button>
        </form>
      ) : null}
    </div>
  );
}

export default Comment;
