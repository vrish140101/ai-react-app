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
  id="city"
  type="text"
  placeholder="Enter city name..."
  aria-label="Enter city name"
  autoComplete="off"
  value={city}
  onChange={(event) => setCity(event.target.value)}
  onKeyDown={handleKeyDown}
/>

      <button
  type="button"
  aria-label="Search weather"
  onClick={handleSearch}
>
  🔍 Search
</button>
<button
  type="button"
  aria-label="Use current location"
  onClick={onCurrentLocation}
>
  📍 Current Location
</button>
    </div>
  );
}

export default SearchBar;