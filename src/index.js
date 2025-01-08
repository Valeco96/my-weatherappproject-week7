function insertMeteo(response) {
  let temperatureElement = document.querySelector("#temperature-input");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
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
