import UserComments from "./UserComments";
import UserEditForm from "./UserEditForm";
import UserFavorites from "./UserFavorites";
import UserPosts from "./UserPosts";

function UserPage() {
    return <div className="UserPage">
        <UserPosts />
        <UserComments />
        <UserFavorites />
        <UserEditForm />
    </div>
}

export default UserPage

//conditional rendering for the user edit form if logged in user id matches param ID


