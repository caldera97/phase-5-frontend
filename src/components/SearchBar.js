import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")
    return <form>
    <label htmlFor="header-search">
        <span className="visually-hidden"></span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s" 
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={() => navigate(`/search/${searchTerm}`)}>🔍</button>
</form>
}

export default SearchBar