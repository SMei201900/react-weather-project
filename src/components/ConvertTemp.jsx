import {useState} from 'react';

const ConvertTemp = ({ celsius }) => {
  const [isCelsius, setIsCelsius] = useState(true); 
    /*we are given degC at the beginnging thus true*/

  const toggleUnit = () => { /*we want to*/
    setIsCelsius(!isCelsius);
  };

  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <a onClick={toggleUnit}>
      {isCelsius ? `${celsius}°C` : `${fahrenheit.toFixed(1)}°F`}
    </a>
  );
};

export default ConvertTemp;




