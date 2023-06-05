import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Buscador from './Buscador';
import ClimaCard from './ClimaCard';

const api = {
  clave: "0ceb60ef2910e7d4d7d86d9bc745946b",
  fuente: "https://api.openweathermap.org/data/2.5/"
};

function Clima() {
  const [consulta, setConsulta] = useState('');
  const [clima, setClima] = useState({});

  const pedirClima = (evento) => {
    if (evento.key === "Enter") {
      fetch(`${api.fuente}weather?q=${consulta}&appid=${api.clave}&units=metric&lang=es`)
        .then(res => res.json())
        .then(resultado => {
          setClima(resultado);
          setConsulta('');
          console.log(resultado);
        });
    }
  };

  const resultadoFecha = (fecha) => {
    let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);

    return fechaFormateada;
  };

  return (
    <Container>
      <div>
        <Buscador
          consulta={consulta}
          setConsulta={setConsulta}
          pedirClima={pedirClima}
        />
      </div>
      {(typeof clima.main !== "undefined") ? (
        <ClimaCard
          clima={clima}
          resultadoFecha={resultadoFecha}
        />
      ) : ('')}
    </Container>
  );
}

export default Clima;