import React from "react";
import "./SearchBox.styles.css";

export const SearchBox = ({ handleChange, searchField, placeholder = "search" }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="search"
      // value={searchField}
      onChange={handleChange}
    />
  );
};
