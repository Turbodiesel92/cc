import React from "react";

function SearchBar({ setSearch }) {
  return (
    <div className="search">
      <input
        id="search"
        type="text"
        className="searchTerm"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
