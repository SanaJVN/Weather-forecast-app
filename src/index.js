function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  function formatDate(timestamp){
    let date = new Date(timestamp)
    let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrsday",
  "Friday",
  "Saturday",
  
];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = date.getMinutes();
if (min < 10) {
  min = `0${min}`;
  }
return`${day} ${hour}:${min}`


  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#date").innerHTML = formatDate;
}

let city = "Lisbon";
let apiKey = "f1b6473cea33289e1ae480b54c226a58";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);
