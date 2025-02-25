const apiKey = "4b004113fe5b3664ad9f4131daf17704";
const cityInput = document.getElementById("city");
const weatherDiv = document.getElementById("weather");
const getWeatherBtn = document.getElementById("getWeatherBtn");

const getWeather = async () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Wpisz nazwę miasta!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    weatherDiv.innerHTML = `
          <p><strong>Temperatura:</strong> ${data.main.temp}°C </p> 
          <p><strong>Pogoda:</strong> ${data.weather[0].description}</p> 
          <p> <strong>Wilgotność:</strong> ${data.main.humidity}% </p> 
        `;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    weatherDiv.innerHTML = `Błąd: ${error.message}`;
  }
};

getWeatherBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeather();
  }
});
