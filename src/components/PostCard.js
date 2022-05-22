import { Link } from "react-router-dom";

function PostCard({ content, id, img, tags, user_id, username }) {
  const handleClick = e => {
    e.preventDefault();
    console.log(e)
    //use e.target.className to check what function to use, whether to edit, delete, or favorite the post
  }
  return (
    <Link to={`/post/${id}`}>
    <div className="PostBorder">
      <div className="PostContent">
        <img className="thumb" src={img} alt="post"></img>
        <article>
          <h1>{content}</h1>
          <span>{username}</span>
          <button className="addFavButton" onClick={handleClick}>☆</button>
          <button className="editButton" onClick={handleClick}>✎</button>
          <button className="trashButton" onClick={handleClick}>🗑</button>
        </article>
      </div>
    </div>
    
    </Link>
  );
}
export default PostCard;
