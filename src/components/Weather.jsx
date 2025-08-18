import { useEffect, useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'
import {ToastContainer} from 'react-toastify' /*required  somewhere in return to use toast popups*/
import 'react-toastify/dist/ReactToastify.css';
import { fetchWeatherData } from './WeatherData'; /*moved weatherdata here*/
import WeatherDetails from './WeatherDetails'; /*my UI essentially*/

const Weather = ({userinput}) => {
  const [weatherData, setWeatherData] = useState(false);

  const search = async(city) => { 
    const data = await fetchWeatherData(city);
    if (data) setWeatherData(data); 
  }; 
  
  useEffect(()=>{
    search("New York") /*The default that shows up when you load into the page*/
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

        <ToastContainer /> 

        {weatherData && <WeatherDetails weatherData={weatherData}/> }
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

