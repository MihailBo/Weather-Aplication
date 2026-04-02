async function temp() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3219&current_weather=true&timezone=auto`;

    const response =await fetch(url);
    const json = await response.json();

    const weather = json.current_weather;
    // document.getElementById("temp2").textContent = 'Temp';
    document.getElementById("temp1").textContent = 'Temp\n' + `${weather.temperature}-C`;
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
    document.getElementById('wind1').innerHTML = 'Wind <br>' + 'Speed: ' + windSpeed + '<br>' + 'Direction: ' + windDirection
}
wind();
// async function temp(){
//     const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m&wind_speed_unit=ms&start_date=2026-03-26&end_date=2026-04-09";
//     const response = await fetch(url);
//     const json = await response.json();
//     const max = json.daily.temperature_2m_max[0];
//     document.getElementById("day1").innerHTML = "max temp " + max;
// }
// temp_day1();
