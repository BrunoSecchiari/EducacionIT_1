import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("Valor inicial");

  return (
    <>
      <input
        className="Header__SearchBar"
        type="text"
        name="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </>
  );
};

export default SearchBar;
