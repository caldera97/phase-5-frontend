import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PostCard({ content, id, img, tags, user_id, username, LoggedInUser }) {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    e.target.className === "editButton"
      ? editPost(e)
      : delPost(e);
  };

  function editPost(e) {
    navigate(`/postForm/edit/${id}`)
  }

  function delPost(e) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"      
    })
    .then(window.location.reload())
  }

  return (
    <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>
      <div className="PostBorder">
        <div className="PostContent">
          {img ? <img className="thumb" src={img} alt="post"></img> : null}
          {/* <img className="thumb" src={img} alt="post"></img> */}
          <article>
            <h1>{content}</h1>
            <span>{username}</span>
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
