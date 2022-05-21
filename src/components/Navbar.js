import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

function Navbar () {
    return <div className="navbar">
        <Link to="/">Navbar- home button</Link>
        <SearchBar />
        <Link to="/login">SignUp/Login</Link>
    </div>
}

export default Navbar