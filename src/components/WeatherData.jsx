import {toast} from 'react-toastify'
import { weathericons } from './WeatherIcons';

export const fetchWeatherData = async (city) => {
    /*created to handle an empty search*/
    if(city === "") {
      toast.error("Enter City Name");
      return null;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok) {
          toast.error(data.message) /*tells us city not found, invalid API key things like that*/
          return;
        }

        const icon = weathericons[data.weather[0].icon] || "null"
        const theweatheris = data.weather[0].description

        return{
          humidity: data.main.humidity, 
          windspeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon,
          theweatheris,
          country: data.sys.country,
        }; 
     } catch (error) {
        console.log("Error in fetching data. Here is the error message: ", error)
        toast.error("Error in fetching data.")
        return null; 
    }
}; 

