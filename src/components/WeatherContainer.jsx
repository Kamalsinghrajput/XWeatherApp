import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCards from "./WeatherCards";

const API_KEY = "a8171453dfa54b91bb4203459252709";
const API_URL = "https://api.weatherapi.com/v1/current.json";

const WeatherContainer = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setWeather(null);
    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}`);
      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      if (!data || !data.current) throw new Error("No data");
      setWeather({
        temp_c: data.current.temp_c,
        humidity: data.current.humidity,
        condition: data.current.condition,
        wind_kph: data.current.wind_kph,
      });
    } catch (err) {
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#eef6fd", minHeight: "100vh", paddingTop: "80px" }}>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <WeatherCards weather={weather} />
    </div>
  );
};

export default WeatherContainer;
