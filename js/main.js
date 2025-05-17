import { checkWeather } from "./api.js";

// DOM Elements

const weatherImg = document.getElementById("weather-img");
const cityInput = document.getElementById("city-input");
const form = document.getElementById("form");
const cityDisplay = document.getElementById("city-display");
const temperatureDisplay = document.getElementById("temperature-display");
const humidityDisplay = document.getElementById("humidity-percentage");
const speedDisplay = document.getElementById("wind-speed");

export function updateWeatherData(weatherData) {
  cityDisplay.innerHTML = weatherData.cityName;
  temperatureDisplay.innerHTML = weatherData.temperature;
  humidityDisplay.innerHTML = weatherData.humidity;
  speedDisplay.innerHTML = weatherData.wind;

  if (weatherData.weather === "Clouds") {
    weatherImg.src = "assets/clouds.png";
  } else if (weatherData.weather === "Clear") {
    weatherImg.src = "assets/clear.png";
  } else if (weatherData.weather === "Rain") {
    weatherImg.src = "assets/rain.png";
  } else if (weatherData.weather === "Drizzle") {
    weatherImg.src = "assets/drizzle.png";
  } else if (weatherData.weather === "Mist") {
    weatherImg.src = "assets/mist.png";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (city) {
    checkWeather(city);
    cityInput.value = "";
  } else {
    console.error("Please enter a city name.");
  }
});
