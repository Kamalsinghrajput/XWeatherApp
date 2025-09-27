import React from "react";

const WeatherCards = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="weather-cards" style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "32px" }}>
      <div className="weather-card" style={{ background: "#fff", borderRadius: "8px", padding: "24px 32px", boxShadow: "0 2px 8px #e0e0e0", textAlign: "center" }}>
        <h3>Temperature</h3>
        <div>{weather.temp_c}&deg;C</div>
      </div>
      <div className="weather-card" style={{ background: "#fff", borderRadius: "8px", padding: "24px 32px", boxShadow: "0 2px 8px #e0e0e0", textAlign: "center" }}>
        <h3>Humidity</h3>
        <div>{weather.humidity}%</div>
      </div>
      <div className="weather-card" style={{ background: "#fff", borderRadius: "8px", padding: "24px 32px", boxShadow: "0 2px 8px #e0e0e0", textAlign: "center" }}>
        <h3>Condition</h3>
        <div>{weather.condition.text}</div>
      </div>
      <div className="weather-card" style={{ background: "#fff", borderRadius: "8px", padding: "24px 32px", boxShadow: "0 2px 8px #e0e0e0", textAlign: "center" }}>
        <h3>Wind Speed</h3>
        <div>{weather.wind_kph} kph</div>
      </div>
    </div>
  );
};

export default WeatherCards;
