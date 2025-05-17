import { updateWeatherData } from "./main.js";

// Api call

export async function checkWeather(city) {
  const apiKey = "13187f3fc99f65ff67d120d87213b972";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

  const loadingIndicator = document.getElementById("loading-indicator");

  try {
    loadingIndicator.style.display = "block";
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    const weatherData = {
      weather: data.weather[0].main,
      cityName: data.name,
      temperature: Math.round(data.main.temp) + "&deg;C",
      humidity: data.main.humidity + "%",
      wind: Math.round(data.wind.speed) + " km/h",
    };

    updateWeatherData(weatherData);
  } catch (err) {
    console.error(err.message);
  } finally {
    loadingIndicator.style.display = "none";
  }
}
