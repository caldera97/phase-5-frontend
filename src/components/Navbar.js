import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar({ LoggedInUser, setLoggedInUser }) {
  function logout() {
    fetch("/logout", { method: "DELETE" }).then(
      setLoggedInUser({
        id: null
      })
    );
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <SearchBar />
      {LoggedInUser.id ? (
        <>
          <button onClick={logout}>Logout</button>
          <Link to={`/user/${LoggedInUser.id}`}>Profile</Link>
          <Link to={'/following'}>Following</Link>
        </>
      ) : (
        <Link to="/login">SignUp/Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
