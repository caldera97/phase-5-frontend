import { Link } from "react-router-dom";

function PostCard({ content, id, img, tags, user_id, username, LoggedInUser }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.className === "addFavButton"
      ? addFav()
      : e.target.className === "editButton"
      ? editPost()
      : delPost();
    //use e.target.className to check what function to use, whether to edit, delete, or favorite the post
  };

  function addFav(e) {
    e = null;
  }

  function editPost(e) {
    e = null;
  }

  function delPost(e) {
    e = null;
  }

  return (
    <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>
      <div className="PostBorder">
        <div className="PostContent">
          <img className="thumb" src={img} alt="post"></img>
          <article>
            <h1>{content}</h1>
            <span>{username}</span>
            {LoggedInUser.id ? (
              <button className="addFavButton" onClick={handleClick}>
                ☆
              </button>
            ) : null}

            {LoggedInUser.id === user_id ? (
              <>
                <button className="editButton" onClick={handleClick}>
                  ✎
                </button>
                <button className="trashButton" onClick={handleClick}>
                  🗑
                </button>
              </>
            ) : null}
          </article>
        </div>
      </div>
    </Link>
  );
}
export default PostCard;
