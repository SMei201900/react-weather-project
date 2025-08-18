import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'
import cloudy_icon from '../assets/cloudy-icon.png'
import windy_icon from '../assets/wind-icon.png'
import humidity_icon from '../assets/humidity-icon.png'
import rain_icon from '../assets/rain-icon.png'
import snowy_icon from '../assets/snow-icon.png'
import sun_icon from '../assets/sun-icon.png'
import thunderstorm_icon from '../assets/thunderstorm-icon.png'


const Weather = () => {

  const userinput = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d" : sun_icon, 
    "01n" : sun_icon, 
    "02d" : cloudy_icon, 
    "02n" : cloudy_icon, 
    "03d" : cloudy_icon, 
    "03n" : cloudy_icon, 
    "04d" : cloudy_icon, 
    "04n" : cloudy_icon, 
    "09d" : rain_icon, 
    "09n" : rain_icon, 
    "10d" : rain_icon, 
    "10n" : rain_icon, 
    "11d" : thunderstorm_icon, 
    "11n" : thunderstorm_icon, 
    "13d" : snowy_icon, 
    "13n" : snowy_icon
  }

  const search = async(city, country) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const icon = allIcons[data.weather[0].icon] || sun_icon
        const theweatheris = data.weather[0].description

        setWeatherData({
          humidity: data.main.humidity, 
          windspeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon,
          theweatheris: theweatheris,
          country: data.sys.country
        });

    } catch (error) {
      console.log("couldnt load", error);
    }
  }

  useEffect(()=>{
    search("London, England")
  },[])

  return (
    <div className='weather'>
        <h1>Weather</h1>

        <div className='searchbar'>
            <input type="text" placeholder='Chicago' ref={userinput}/>
            <img src={search_icon} 
              alt="magnifying glass image to represent a search icon" 
              onClick={()=>search(userinput.current.value)} />
        </div>

        <img src={weatherData.icon} alt="clouds" className='weatherIcon'/>

        <div className="weatherDataMain">
          <p className="weatherDescribe">{weatherData.theweatheris}</p>
          <p className="temp">{weatherData.temperature} <a href="">&deg;C</a> </p>
          <p className="location">{weatherData.location}, {weatherData.country}</p>
        </div>

        <div className="weather-data"> 
          <div className="col">          
              <img src={humidity_icon} alt="Humidity represented by water droplets" />
              <div>
                <span>Humidity: </span>
                <p>{weatherData.humidity} % </p>
              </div> 
            </div>

            <div className="col">          
              <img src={windy_icon} alt="An icon representing wind speed"/>
              <div>
                <span>Wind Speed</span>
                <p>{weatherData.windspeed} km/h</p>
              </div> 
            </div>
        </div>

    </div>
  )
}

export default Weather


/*
other weather information that we still need is sunset/sunrise time
  SO data.sys.sunrise AND data.sys.sunset 
    we would need to convert these times to actually readable ones
      in the same area there is data.sys.timezone  
feels-like is provided by openAPI so we can add that maybe? data.main.feels_like
temp min and max? data.main.temp_max AND data.main.temp_min


sunset might be uv index also 

*/

