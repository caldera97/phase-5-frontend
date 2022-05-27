import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UserPageNav from "./UserPageNav";

function UserPage({ setUser, user }) {
  const { userId } = useParams();

  useEffect(() => {
    fetch(`/users/${parseInt(userId)}`)
      .then((r) => r.json())
      .then((fetchedUser) => setUser(fetchedUser));
  }, [userId, setUser]);

  return (
    <div className="UserPage">
      <UserPageNav user={user} />
    </div>
  );
}

export default UserPage;

//conditional rendering for the user edit form if logged in user id matches param ID if i add it
