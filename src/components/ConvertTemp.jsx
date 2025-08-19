import {useState} from 'react';

const ConvertTemp = ({ celsius }) => {
  const [isCelsius, setIsCelsius] = useState(true); 
    /*we are given degC at the beginning thus true*/

  const toggleUnit = () => {
    setIsCelsius(!isCelsius); /*we want to change Celsius to NOT Celsius */
  };

  const fahrenheit = (celsius * 9) / 5 + 32;

  /*so when we click on the link we call toggleUnit that makes setIsCel to false now 
    which allows us to then call fahrenheit but rounded*/
  return (
    <a onClick={toggleUnit}>
    {isCelsius ? `${celsius}°C` : `${fahrenheit.toFixed(1)}°F`}
    </a>
  );
};

export default ConvertTemp;




