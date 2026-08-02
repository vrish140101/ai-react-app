import { useState } from "react";

function SearchBar({ onSearch, onCurrentLocation }) {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (city.trim() === "") return;

    onSearch(city);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        🔍 Search
      </button>

      <button onClick={onCurrentLocation}>
        📍 Current Location
      </button>
    </div>
  );
}

export default SearchBar;