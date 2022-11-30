import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("Tu busqueda...");

  return (
    <>
      <input
        className="Header__SearchBar"
        type="text"
        name="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setSearch("")}
      ></input>
    </>
  );
};

export default SearchBar;
