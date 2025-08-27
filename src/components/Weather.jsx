import React from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'
import cloudy_icon from '../assets/cloudy-icon.png'

/*git rm --cached .env
import rain_icon from '../assets/rain-icon.png'
import snowy_icon from '../assets/snowy-icon.png'
import sun_icon from '../assets/sun-icon.png'
import thunderstorm_icon from '../assets/thunderstorm-icon.png'
import windy_icon from '../assets/windy-icon.png'
import humidity_icon from '../assets/humidity-icon.png'*/

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
    </div>
  )
}

export default Weather

