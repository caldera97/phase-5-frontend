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
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>FlatAffinity</Link>
      <SearchBar />
      {LoggedInUser.id ? (
        <>
          <button onClick={logout}>Logout</button>
          <Link to={`/user/${LoggedInUser.id}`} style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
          {/* <Link to={'/following'}>Following</Link> */}
        </>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>SignUp/Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
