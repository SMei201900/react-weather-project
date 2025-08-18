import React, { useEffect, useState } from 'react'
import './Weather.css';
import search_icon from '../assets/search-icon.jpg'
import {weathericons, defaultIcons} from "./weathericons"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Weather = ({userinput}) => {

  const [weatherData, setWeatherData] = useState(false);

  const search = async(city, country) => { /*created to handle an empty search*/
    if(city === "") {
      toast.error("Enter City Name");
      return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        /*const aqiURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_ID}`;*/
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok) {
          toast.error(data.message) /*tells us city not found, invalid API key things like that*/
          return;
        }

        const icon = weathericons[data.weather[0].icon] || "null"
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
      setWeatherData(false);
      console.log("Error in fetching data. Here is the error message: ", error)
      toast.error("Error in fetching data.")
    }
  }

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

        {weatherData?<>
          <img src={weatherData.icon} alt="clouds" className='weatherIcon'/>

          <div className="weatherDataMain">
            <p className="weatherDescribe">{weatherData.theweatheris}</p>
            <p className="temp">{weatherData.temperature} <a href="">&deg;C</a> </p>
            <p className="location">{weatherData.location}, {weatherData.country}</p>
          </div>

          <div className="weather-data"> 
            <div className="col">          
                <img src={defaultIcons.humidity_icon} alt="Humidity represented by water droplets" />
                <div>
                  <span>Humidity: </span>
                  <p>{weatherData.humidity} % </p>
                </div> 
              </div>

              <div className="col">          
                <img src={defaultIcons.windy_icon} alt="An icon representing wind speed"/>
                <div>
                  <span>Wind Speed</span>
                  <p>{weatherData.windspeed} km/h</p>
                </div> 
              </div>
            </div>
          </>:<></>}
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

