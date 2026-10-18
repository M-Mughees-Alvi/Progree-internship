const emojis = {
  "01": "☀️",
  "02": "⛅",
  "03": "☁️",
  "04": "☁️",
  "09": "🌧️",
  10: "🌦️",
  11: "⛈️",
  13: "❄️",
  50: "🌫️",
};

function WeatherCard({ data }) {
  const iconCode = data.weather[0].icon;
  const emoji = iconCode === "01n" ? "🌙" : emojis[iconCode.slice(0, 2)];

  return (
    <div className="weather-card">
      <h2 className="city-name">
        {data.name}, {data.sys.country}
      </h2>
      <p className="weather-icon">{emoji}</p>
      <p className="temperature">{Math.round(data.main.temp)}°C</p>
      <p className="description">{data.weather[0].description}</p>

      <div className="details">
        <div className="detail-box">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
        <div className="detail-box">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{data.main.humidity}%</span>
        </div>
        <div className="detail-box">
          <span className="detail-label">Wind</span>
          <span className="detail-value">
            {Math.round(data.wind.speed * 3.6)} km/h
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
