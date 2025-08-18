import React from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'

const Weather = () => {
  return (
    <div className='weather'>
        <h1>Weather</h1>
        <div className='searchbar'>
            <input type="text" placeholder='Chicago' />
            <img src={search_icon} alt="magnifying glass image to represent a search icon" />
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