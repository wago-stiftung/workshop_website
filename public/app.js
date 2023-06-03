const apiKey = "24cfed173f49659a2b7a15a0c632f054";
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `http://localhost:3000/weather?city=${city}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";

    console.log(data.weather[0].main);

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    }  else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    const city = document.querySelector(".search input").value;
    checkWeather(city);
});

document.addEventListener("keypress", (e ) =>  {

    if (e.key === 'Enter') {
        const city = document.querySelector(".search input").value;
        checkWeather(city);
    }
});

checkWeather("London");