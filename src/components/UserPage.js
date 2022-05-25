import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserComments from "./UserComments";
// import UserEditForm from "./UserEditForm";
import UserFavorites from "./UserFavorites";
import UserPosts from "./UserPosts";

function UserPage({LoggedInUser}) {
    const { userId } = useParams();
    const [user, setUser] = useState("")

    useEffect(() => {fetch(`/users/${parseInt(userId)}`)
    .then(r => r.json())
    .then((fetchedUser) => setUser(fetchedUser))},[userId])

    return <div className="UserPage">
        <UserPosts posts={user.posts} LoggedInUser={LoggedInUser}/>
        <UserComments comments={user.comments} LoggedInUser={LoggedInUser}/>
        <UserFavorites favorites={user.favorites} LoggedInUser={LoggedInUser}/>
        {/* {LoggedInUser.id === parseInt(userId) ? <UserEditForm /> : null} */}
    </div>
}

export default UserPage

//conditional rendering for the user edit form if logged in user id matches param ID


