import React, { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "8px 18px", background: "#4CAF50", color: "white", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer" }}
        >
          Search
        </button>
      </div>
      {loading && <p style={{ marginTop: "20px" }}>Loading data…</p>}
    </div>
  );
};

export default SearchBar;
