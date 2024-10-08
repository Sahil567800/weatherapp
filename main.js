const apikey ="bac8bdd12ecc9d069cdaa936a56d4022";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.getElementById("input")
const searchbtn= document.getElementById("searchBtn")

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+`&appid=${apikey}`);
    const data = await response.json()
    console.log(data);   
    const search = document.getElementById("city") 
    search.innerHTML = data.name
    const temp = document.getElementById("temp");
    temp.innerHTML=data.main.temp+'C';
    const windspeed = document.getElementById("windspeed")
    windspeed.innerHTML=data.wind.speed +" "+"km/h"
    const humidityPer = document.getElementById("humidityPer")
    humidityPer.innerHTML = data.main.humidity +"%"
    const condition = document.getElementById("condition")
    condition.innerHTML=data.weather[0].main
}
searchbtn.addEventListener("click",()=>{
    checkWeather(input.value)
})

