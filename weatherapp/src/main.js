document
  .getElementById("getWeatherButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    retrieveWeatherInfo();
  });
// Retrieve data from API by making a call
function retrieveWeatherInfo(e) {
  const apiKey = "b48e954a5eed9632982ee8987daab198";
  const inputValue = document.getElementById("cityInput").value.trim();
  const units = document.querySelector('input[name="units"]:checked').value;
  // URL to reach API
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=${units}`;
  if (inputValue === "") {
    return alert("Please enter a city");
  }

  fetch(url)
    .then((response) => response.json())
    // When data is returned, we want to create element so the information appears on the page
    .then((data) => {
      if (data.cod != 200) {
        throw new Error(data.message);
      }
      document.getElementById("cityName").innerHTML = data.name;
      let temperatureSymbol;
      switch (units) {
        case "metric":
          temperatureSymbol = "&deg;C";
          break;
        case "imperial":
          temperatureSymbol = "&deg;F";
          break;
        default:
          temperatureSymbol = "&deg;K";
      }
      document.getElementById("temperature").innerHTML =
        Math.round(data.main.temp) + temperatureSymbol;
      // if (units === "metric") {
      //   document.getElementById("temperature").innerHTML =
      //     Math.round(data.main.temp) + "&deg;C";
      // }
    })
    .catch((err) => {
      return (document.getElementById("temperature").innerHTML = err.message);
    });
}
