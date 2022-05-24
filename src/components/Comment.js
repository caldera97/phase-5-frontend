function Comment({ id, content, username, user_id, LoggedInUser }) {
  return (
    <div className="CommentSingle">
      <div>{username}</div>
      <div>{content}</div>

      {user_id === LoggedInUser.id ? (
        <div>
          <button>✎</button>
          <button>🗑</button>
        </div>
      ) : null}
    </div>
  );
}

export default Comment;
