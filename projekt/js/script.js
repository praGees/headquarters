const city = document.querySelector("#city-name");
const weather2 = document.querySelector("#weather-day-content");
const temp = document.querySelector("#weather-temp");

const weather = {};

    weather.temp = {
        unit: "celsiuses"
    };

    const kelvin = 273.15;
    const apiKey = 'cca7d6e6a896bb7d22e77797b87237cc';
    

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
    alert("Geolokalizcja nie jest wspierana przez twoją przeglądarke.");
    }
        
    function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    apiWeather(lat, lon);
}
    function error() {
    alert("Brak dostępu do lokalizacji.");
    }
    


    function apiWeather(lat, lon) {
        // const api = `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}&lang=PL`;
        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=PL`;
        fetch(api)
        .then(response => {let test = response.json(); return test;})
        .then((test)=> {
            weather.temp.value = (test.main.temp - parseFloat(kelvin)).toFixed(1);
            weather.info = test.weather[0].description;
            weather.city = test.name;
            weather.country = test.sys.country;
            console.log(weather.temp.value, weather.info, weather.city, weather.country);
        })
        .then(function() {
            showWeather();
        })
    }

   function showWeather() {
city.textContent = `Miasto: ${weather.city}`;
weather2.textContent = `Pogoda: ${weather.info}`;
temp.textContent = `Temperatura: ${weather.temp.value}℃`;
    }
    let flag = false;
const btnFahrenheit = document.querySelector('#btnFahrenheit');
btnFahrenheit.addEventListener('click', () => {
    if (!flag) {
        const celsiusTemp = weather.temp.value;
        const fahrenHeit = (celsiusTemp * 1.8) + 32;
        temp.innerHTML = `Temperatura: ${fahrenHeit} \xB0F`;
        flag = true;
        btnFahrenheit.textContent = "Zmień z °F na °C"
    } else {
        flag = false;
        temp.innerHTML = `Temperatura: ${weather.temp.value}°C`
        btnFahrenheit.textContent = "Zmień z °C na °F"
    }
})
