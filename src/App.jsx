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
