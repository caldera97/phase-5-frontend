import { Link } from "react-router-dom";
function UserPageNav({ user }) {
    return <div>
        <Link to={`/user/${user.id}/posts`}>User Posts</Link>
        <Link to={`/user/${user.id}/comments`}>User Comments</Link>
        <Link to={`/user/${user.id}/favorites`}>User Favorites</Link>
    </div>
}

export default UserPageNav;