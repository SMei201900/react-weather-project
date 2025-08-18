import React from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'
import cloudy_icon from '../assets/cloudy-icon.png'
import windy_icon from '../assets/wind-icon.png'
import humidity_icon from '../assets/humidity-icon.png'

/*
import rain_icon from '../assets/rain-icon.png'
import snowy_icon from '../assets/snow-icon.png'
import sun_icon from '../assets/sun-icon.png'
import thunderstorm_icon from '../assets/thunderstorm-icon.png'*/


const Weather = () => {
  return (
    <div className='weather'>
        <h1>Weather</h1>
        <div className='searchbar'>
            <input type="text" placeholder='Chicago' />
            <img src={search_icon} alt="magnifying glass image to represent a search icon" />
        </div>
        <img src={cloudy_icon} alt="clouds" className='weatherIcon'/>
        <p className="temp">16 <a href="">&deg;C</a></p>
        <p className="location">London</p>
        <div className="weatherData"> 
          <div className="weatherData-col">          
              <img src={humidity_icon} alt="Humidity represented by water droplets" className='weatherDataIcon'/>
              <div className="weatherDataContents">
                <span>Humidity: </span>
                <p>91 % </p>
              </div> 
            </div>
            <div className="weatherData-col">          
              <img src={windy_icon} alt="A icon representing wind speed" className='weatherDataIcon'/>
              <div>
                <span>Wind Speed</span>
                <p>3.5 km/h</p>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Weather


/*we need the weather for ONE day 
it should show the temperature, description of the weather (ex: sunny, runny, overcast clouds, thunderstorm), 
    an icon representing the weather 
We need a search bar to find the weather of a place 
the searchbar should be replaced by the name of the place 

other weather information includes humidity/rain, sunset?, wind speed, ??? represented by the stonks icon

sunset might be uv index also 

*/