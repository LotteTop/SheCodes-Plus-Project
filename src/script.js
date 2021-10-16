function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let citysearch = document.querySelector("h2");
  citysearch.innerHTML = searchInput.value;
  let city = searchInput.value;
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchform = document.querySelector("form");
searchform.addEventListener("submit", citySearch);

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#temperature");
  h1.innerHTML = `${temperature}°C`;
}
