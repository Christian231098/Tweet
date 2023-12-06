import React from "react";

const SearchBar = ({
  filterText,
  inThisLocation,
  setFilterText,
  setInThisLocation
}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      style={{
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "90%"
      }}
    />
    <p>
      <label>
        <input
          type="checkbox"
          checked={inThisLocation}
          onChange={(e) => setInThisLocation(e.target.checked)}
        />{" "}
        Only show tweets in your current location
      </label>
    </p>
  </form>
);

export default SearchBar;
