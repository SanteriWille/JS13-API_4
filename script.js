const apiKey = "87640d946d5fa821a6073ec43ff55236"

function search() {
  const cityName = document.getElementById("input").value;
  const countryCode = "NO"
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`

  // Fjerner infoen etter nytt søk
  const existingInfo = document.querySelectorAll(".info")
  existingInfo.forEach(element => element.remove())
  // Fjerner det som ble skrivd inn i input etter søk
  document.getElementById("input").value = '';

  fetch(api)
    .then(response => response.json())
    .then(data => {
      // Lager Infoen som vises på nettsiden
      const info = document.createElement('div');
      info.classList.add('info');
  
      info.innerHTML = `
      <p>${data.name}, ${countryCode}</p>
      <h1>${data.main.temp}°C</h1>
      <p>${data.weather[0].description}</p>
      <p>${data.main.temp_min}°C / ${data.main.temp_max}°C</p>`
      document.body.appendChild(info);
    });
}

document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    search();
  }
});