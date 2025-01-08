function insertMeteo(response) {
  let temperatureElement = document.querySelector("#temperature-input");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let currentTime = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);

  currentTime.innerHTML = formatDate(date);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "5f6791e5e0b8c3b470of06t31a2937df";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(insertMeteo);
}

function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit", enterCity);

searchCity("Rome");
