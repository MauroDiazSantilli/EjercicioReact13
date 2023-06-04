import React from 'react';

const ClimaCard = ({ clima, obtenerFecha }) => {
  return (
    <div>
      <div>
        <div>{clima.name}, {clima.sys.country}</div>
        <div>{obtenerFecha(new Date())}</div>
      </div>
      <div>
        <div>
          {Math.round(clima.main.temp)}°C
        </div>
        <div>{clima.weather[0].main}</div>
      </div>
    </div>
  );
};

export default ClimaCard