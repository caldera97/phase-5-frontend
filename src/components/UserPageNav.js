import { Link } from "react-router-dom";
function UserPageNav({ user }) {
    return <div className="UserPageNav">
        <Link to={`/user/${user.id}/posts`} style={{ textDecoration: 'none', color: 'white' }}>User Posts</Link>
        <Link to={`/user/${user.id}/comments`} style={{ textDecoration: 'none', color: 'white' }}>User Comments</Link>
        <Link to={`/user/${user.id}/favorites`} style={{ textDecoration: 'none', color: 'white' }}>User Favorites</Link>
    </div>
}

export default UserPageNav;