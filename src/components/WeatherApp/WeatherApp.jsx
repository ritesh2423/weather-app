import React, { useState } from 'react'
import "./WeatherApp.css"
import search_icon from "../aassets/search.png"
import clear_icon from "../aassets/clear.png"
import cloud_icon from "../aassets/cloud.png"
import drizzle_icon from "../aassets/drizzle.png"
import rain_icon from "../aassets/rain.png"
import snow_icon from "../aassets/snow.png"
import wind_icon from "../aassets/wind.png"
import humidity_icon from "../aassets/humidity.png"
import pressure from "../aassets/pressure.png"

export const WeatherApp = () => {
  let api_key="6e5d6351c095272c22afbdad5ce11ef1";

  const [wicon,setwicon] = useState(cloud_icon);
  const search = async () =>{
    const element = document.getElementsByClassName("cityinput")
    if(element[0].value==="")
    {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    
    let responce = await fetch(url);
    let data = await responce.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const mintemp = document.getElementsByClassName("minmax");
    const pressure_level = document.getElementsByClassName("pressure-level");

    pressure_level[0].innerHTML = data.main.pressure;    
    mintemp[0].innerHTML = data.main.feels_like+"°C";
    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML = data.wind.speed+" Km/h";
    temp[0].innerHTML = Math.floor(data.main.temp)+"°C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setwicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setwicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setwicon(snow_icon);
    }
    else{
      setwicon(clear_icon);
    }

  }

  return (
  <div className="bac" style={{backgroundImage:`url${bac}`}}>
    <div className="Box">
      <div className="topbar">
        <input type='text' className='cityinput' placeholder="search"/>
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="nothing" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="feels_like">Feels_like</div>
      <div className="minmax">20°C</div>
      <div className="weather-location">Delhi</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
        <div className="element">
          <img src={pressure} alt="" className="icon" />
          <div className="data">
            <div className="pressure-level">1000</div>
            <div className="Pressure">Pressure</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
