import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import Buscador from './Buscador';
import ClimaCard from './ClimaCard';

const api = {
  clave: "0ceb60ef2910e7d4d7d86d9bc745946b",
  fuente: "https://api.openweathermap.org/data/2.5/"
};

function Clima() {
  const [consulta, setConsulta] = useState('');
  const [clima, setClima] = useState({});
  const [error, setError] = useState('');

  const pedirClima = (evento) => {
    if (evento.key === "Enter" || evento === 'click') {
      fetch(`${api.fuente}weather?q=${consulta}&appid=${api.clave}&units=metric&lang=es`)
        .then(res => res.json())
        .then(resultado => {
          if (resultado.cod === '404') {
            setError('No se encontraron datos para la ciudad ingresada.');
            setClima({});
          } else {
            setClima(resultado);
            setError('');
          }
          setConsulta('');
        })
        .catch(error => {
          setError('Ocurrió un error al obtener los datos. Por favor, intenta nuevamente.');
          setClima({});
          setConsulta('');
        });
    }
  };

  const resultadoFecha = (fecha) => {
    let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let fechaFormato = fecha.toLocaleDateString('es-ES', opcionesFecha);

    return fechaFormato;
  };

  return (
    <Container>
      <div>
        <Buscador
          consulta={consulta}
          setConsulta={setConsulta}
          pedirClima={pedirClima}
        />
        {error && <Alert variant="danger" className='mt-3'>{error}</Alert>}
      </div>
      {(typeof clima.main !== "undefined" && !error) ? (
        <ClimaCard
          clima={clima}
          resultadoFecha={resultadoFecha}
        />
      ) : ('')}
    </Container>
  );
}

export default Clima;