import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-near-white w-25 "
        type="search"
        placeholder="search recipe"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
