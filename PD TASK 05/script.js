// script.js

const apiKey = '2662adb57d57680b8f39db6545236acc';  // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) return;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const conditions = data.weather[0].description;

    document.getElementById('cityName').innerText = cityName;
    document.getElementById('temperature').innerText = `${temperature}°C`;
    document.getElementById('conditions').innerText = conditions.charAt(0).toUpperCase() + conditions.slice(1);
}
