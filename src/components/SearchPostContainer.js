import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

function SearchPostContainer(LoggedInUser) {
  const { searchTerm } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/search/${searchTerm}`)
      .then((res) => res.json())
      .then((posts) => (posts ? setFilteredPosts(posts) : undefined));
  }, [searchTerm]);

  const renderPosts = filteredPosts?.map((post) => (
    <div key={post.id} className="PostCard">
      <PostCard
        LoggedInUser={LoggedInUser}
        content={post.content}
        id={post.id}
        img={post.img}
        tags={post.tags}
        user_id={post.user_id}
        username={post.user.username}
      />
    </div>
  ));

  return <div>{renderPosts}</div>;
}

export default SearchPostContainer;
