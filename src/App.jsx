import React, {useRef} from 'react'
import Weather from './components/Weather'
import './App.css';

const App = () => {
  const userinput = useRef(); 
  
  return (
    <div className="app-container">
        <Weather userinput={userinput}/> {/*using props here*/}
    </div>
  )
}

export default App

/*
https://www.flaticon.com/free-animated-icons/weather 
https://fontawesome.com/icons/categories/weather 
*/

/*MAYBES
https://www.flaticon.com/free-animated-icon/hurricane_17858153 
https://www.flaticon.com/free-animated-icon/flood_18821565 
https://www.flaticon.com/free-animated-icon/twister_11688571 
https://www.flaticon.com/free-animated-icon/drought_17858201 
*/