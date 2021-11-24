import React from 'react';

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
const TemperatureInput = ({ scale, temperature, handleTemperatureChange }) => {
  return (
    <div>
      <h1>
        temperature on
        {' '}
        {scaleName[scale] }
      </h1>
      <input value={temperature} type="text" onChange={(e) => { return handleTemperatureChange(e, scale); }} />
    </div>
  );
};

export default TemperatureInput;
