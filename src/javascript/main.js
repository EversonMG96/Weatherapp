
const apiKey = "d514009f1874431b33661655dfef1fe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "src/images/images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "src/images/images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "src/images/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "src/images/images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "src/images/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

