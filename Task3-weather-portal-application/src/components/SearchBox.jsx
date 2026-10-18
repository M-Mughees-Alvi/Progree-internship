import { useState } from "react";

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city.trim());
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
