const apiKey = "d514009f1874431b33661655dfef1fe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

checkWeather();