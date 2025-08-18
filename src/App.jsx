import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className="app-container">
        <Weather/>
    </div>
  )
}

export default App

/*rafac is shortcut*/

/*we need the weather for ONE day 
it should show the temperature, description of the weather (ex: sunny, runny, overcast clouds, thunderstorm), 
    an icon representing the weather 
We need a search bar to find the weather of a place 
the searchbar should be replaced by the name of the place 

other weather information includes humidity/rain, sunset?, wind speed, ??? represented by the stonks icon

sunset might be uv index also 

*/

/*
https://www.flaticon.com/free-animated-icons/weather 
https://basmilius.github.io/weather-icons/ 
https://fontawesome.com/icons/categories/weather 
*/