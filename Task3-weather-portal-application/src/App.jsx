import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getWeather(city) {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);

      if (response.status === 401) {
        throw new Error("Invalid API key.");
      }
      if (response.status === 404) {
        throw new Error(
          "City not found. Try the format: City, Country code (e.g. Faisalabad, PK).",
        );
      }
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      if (err instanceof TypeError) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(err.message);
      }
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Weather Portal</h1>
      <SearchBox onSearch={getWeather} />

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
