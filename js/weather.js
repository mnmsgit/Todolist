const weather = document.querySelector("#weather-box span:first-child");
const city = document.querySelector("#weather-box span:last-child");
const API_KEY = "b870da0c20acaed6e8058b120cfc0dbc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}
function onGeoError() {
  alert("Can't find you.\n Please cheak your settings");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);