async function temp() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3219&current_weather=true&timezone=auto`;

    const response =await fetch(url);
    const json = await response.json();

    const weather = json.current_weather;
    // document.getElementById("temp2").textContent = 'Temp';
    document.getElementById("temp1").textContent = 'Temp\n' + `${weather.temperature} °C `;
}
temp();
async function rain(){
    const url ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=rain';
    const response =await fetch(url);
    const json = await response.json();
    const rainValue = json.hourly.rain[0];
    document.getElementById('rain1').innerHTML = 'Rain <br>' + rainValue + '%';
}
rain();
async function wind(){
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,wind_direction_10m';
    const response = await fetch(url);
    const json = await response.json();
    const windSpeed = json.hourly.wind_speed_10m[0];
    const windDirection = json.hourly.wind_direction_10m[0];
    document.getElementById('wind1').innerHTML = 'Wind <br>' + 'Speed- ' + windSpeed + "m/s" + '<br>' + 'Direction- ' + windDirection
}
wind();

async function dates(){

    for(let i = 0;i < 7; i++){
        const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
        const date = new Date();
        date.setDate(date.getDate() + i);
        const dayDate = date.getDate();
        const monthDate = date.getMonth();
        const yearDate = date.getFullYear();
        const weekDay = days[date.getDay()];

        document.getElementById(`date${i+1}`).innerHTML =weekDay + "<br>" + dayDate + '.' + monthDate +"." + yearDate;
    }
}
dates();
async function week(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,rain_sum";
    const response = await fetch(url);
    const json = await response.json();
    for(let i = 0; i < 7; i++){
        const maxTemp = json.daily.temperature_2m_max[i];
        const minTemp = json.daily.temperature_2m_min[i];
        const midTemp = (maxTemp + minTemp) / 2;
        document.getElementById(`day${i+1}Temp`).innerHTML = "Max- " + maxTemp.toFixed(1) + "°C" + "<br>" +"Min- " + minTemp.toFixed(1) + "°C"  + "<br>" + "Average- " + midTemp.toFixed(1) + "°C" ;
        const wind = json.daily.wind_speed_10m_max[i];
        document.getElementById(`day${i+1}Wind`).innerHTML = "Wind speed: " + wind.toFixed(1) + " m/s";
        const rain = json.daily.rain_sum[i];
        document.getElementById(`day${i+1}Rain`).innerHTML = "Rain- " + rain.toFixed(1) + "%";
    }
}
week();
