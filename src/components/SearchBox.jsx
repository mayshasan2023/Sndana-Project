import React from "react";
import { useState } from "react";
import "../styles/searchBox.css";
import search from "../assets/search.png";
const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <div>
      <input
        className="search-style"
        type="search"
        placeholder="..ابحث عن النبتة التي تريدها"
        onChange={handleChange}
        value={searchInput}
        />
        <img className="search-container-search" src={search} height={30} alt="search" />

    </div>
  );
};

export default SearchBox;
