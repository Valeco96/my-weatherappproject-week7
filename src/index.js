function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit", enterCity);
