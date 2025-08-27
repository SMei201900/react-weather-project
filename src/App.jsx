import React, {useRef} from 'react'
import Weather from './components/WeatherApp'
import './App.css';
import Credits from './credentials/Credits';

const App = () => {
  const userinput = useRef(); 
  
  return (
    <div className="app-container">
        <Weather userinput={userinput}/> {/*using props here*/}
        <Credits />
    </div>
  )
}

export default App
