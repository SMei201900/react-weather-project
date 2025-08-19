import {defaultIcons} from "./weathericons"
import mapIcon from "../assets/map-icon.jpg"

const WeatherDetails = ({ weatherData }) => {
  return (
    <>
      <img src={weatherData.icon} alt="Weather Icon" className='weatherIcon' />

      <div className="weatherDataMain">
        <p className="weatherDescribe">{weatherData.theweatheris}</p>
        <p className="temp">{weatherData.temperature} <a href="">&deg;C</a></p>
        <span className="mapIconLocation">
          <img src={mapIcon} alt="A map icon" />
          <p className="location">{weatherData.location}, {weatherData.country}</p>
        </span>
        
      </div>

      <div className="weather-data">
        <div className="col">
          <img src={defaultIcons.humidity_icon} alt="Humidity" />
          <div>
            <span>Humidity:</span>
            <p>{weatherData.humidity} %</p>
          </div>
        </div>

        <div className="col">
          <img src={defaultIcons.windy_icon} alt="Wind Speed" />
          <div>
            <span>Wind Speed:</span>
            <p>{weatherData.windspeed} km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;

