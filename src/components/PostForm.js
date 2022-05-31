import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ AllPosts, LoggedInUser, toggle, setToggle }) {
  let navigate = useNavigate();
  const { EditOrNew } = useParams();
  const { postId } = useParams();
  const [imgSrc, setImgSrc] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [post, setPost] = useState({
    content: "",
    img: "",
    tags: "",
  });

  useEffect(
    () =>
      EditOrNew === "edit"
        ? setPost(AllPosts.find((posting) => posting.id === parseInt(postId)))
        : undefined,
    [EditOrNew, postId, AllPosts]
  );

  function handleSubmit(e) {
      e.preventDefault()
    EditOrNew === "edit" ? handleEdit() : handleNew();
  }

  function handleEdit() {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content || post.content,
        img: imgSrc || post.img,
        tags: tags || post.tags,
      }),
    })
      .then(() => setToggle(toggle => toggle + 1))
      .then(alert("updated"))
      .then(navigate(`/post/${postId}`));
  }

  function handleNew() {
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content || post.content,
        img: imgSrc || post.img,
        tags: tags || post.tags,
        user_id: LoggedInUser.id,
      }),
    })
    .then(() => setToggle(toggle => toggle + 1))
    .then(() => alert("posted!"))
  }

  return (
    <div className="login-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>image url</p>
        <input
          placeholder="image url"
          defaultValue={post ? post.img : null}
          onChange={(e) => setImgSrc(e.target.value)}
        />
        <p>text content</p>
        <input
          placeholder="text"
          defaultValue={post ? post.content : null}
          onChange={(e) => setContent(e.target.value)}
        />
        <p>tag</p>
        <input
          placeholder="tags for post"
          defaultValue={post ? post.tags : null}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default PostForm;
//ideally can be used to create and edit posts
//maybe have "create post" and "edit post" in state and choose action based on that
//content, image, tag
