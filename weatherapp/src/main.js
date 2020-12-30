document
  .getElementById("getWeatherButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    retrieveWeatherInfo();
  });

function retrieveWeatherInfo(e) {
  const apiKey = "b48e954a5eed9632982ee8987daab198";
  const inputValue = document.getElementById("cityInput").value.trim();
  const units = document.querySelector('input[name="units"]:checked').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=${units}`;
  if (inputValue === "") {
    return alert("Please enter a city");
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod != 200) {
        throw new Error(data.message);
      }
      let temperatureSymbol;
      switch (units) {
        case "metric":
          temperatureSymbol = "&deg;C";
          break;
        case "imperial":
          temperatureSymbol = "&deg;F";
          break;
        default:
          temperatureSymbol = "K";
      }
      document.getElementById("temperature").innerHTML =
        Math.round(data.main.temp) + temperatureSymbol;
      const weatherIcon = document.getElementById("weatherIconImg");
      weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    })
    .catch((err) => {
      return (document.getElementById("temperature").innerText = err.message);
    });
}
