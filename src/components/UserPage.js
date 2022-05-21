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

// view your posts
// view your comments 
// view your favorites 
// edit user credentials 

//needs user post component, use post cards inside
//needs user comments, use comment inside
//needs favorites component, use post cards inside
//needs form to edit user info
