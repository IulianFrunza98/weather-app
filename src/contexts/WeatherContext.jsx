import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cityInput, setCityInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(cityName) {
    try {
      setError(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      if (!res.ok) throw new Error("Could not fetch weather data");
      const data = await res.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Could not fetch forecast data");
      const forecastData = await forecastRes.json();

      const dailyForecast = forecastData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item) => ({
          date: item.dt_txt.split(" ")[0],
          temp: item.main.temp.toFixed(0),
          condition: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      setWeather(data);
      setForecast(dailyForecast);
      setError(null);
    } catch (err) {
      setError(err);
      setWeather(null);
      setForecast([]);
      console.error(err.message);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!cityInput) {
      setError(new Error("Please enter a city name"));
      return;
    }
    setError(null);
    fetchWeatherData(cityInput);
  }

  return (
    <WeatherContext.Provider
      value={{
        cityInput,
        error,
        forecast,
        setCityInput,
        weather,
        handleSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useWeather, WeatherProvider };
