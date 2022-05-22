import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar({ LoggedInUser, setLoggedInUser }) {
  function logout() {
    fetch("/logout", { method: "DELETE" }).then(
      setLoggedInUser({
        about: null,
        id: null,
      })
    );
  }

  return (
    <div className="navbar">
      <Link to="/">Navbar- home button</Link>
      <SearchBar />
      {LoggedInUser.id ? (
        <>
          <button onClick={logout}>Logout</button>
          Profile
        </>
      ) : (
        <Link to="/login">SignUp/Login</Link>
      )}
    </div>
  );
}

export default Navbar;
