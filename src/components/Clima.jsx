import React, { useState } from 'react';
import Buscador from './Buscador';
import ClimaCard from './ClimaCard';

const api = {
  clave: "0ceb60ef2910e7d4d7d86d9bc745946b",
  fuente: "https://api.openweathermap.org/data/3.0/"
};

function Clima() {
  const [consulta, setConsulta] = useState('');
  const [clima, setClima] = useState({})

  const buscarClima = (evento) => {
    if (evento.key === "Enter") {
      fetch(`${api.fuente}weather?q=${consulta}&appid=${api.clave}&units=metric`)
        .then(res => res.json())
        .then(resultado => {
          setClima(resultado)
          setConsulta('');
          console.log(resultado)
        });
    }
  };

  const obtenerFecha = (fecha) => {
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    let dia = dias[fecha.getDay()]
    let numeroDia = fecha.getDate()
    let mes = meses[fecha.getMonth()]
    let año = fecha.getFullYear()

    return `${dia} ${numeroDia} ${mes} ${año}`
  };

  return (
    <div className={(typeof clima.main !== "undefined") ? ((clima.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div>
          <Buscador
            consulta={consulta}
            setConsulta={setConsulta}
            buscarClima={buscarClima}
          />
        </div>
        {(typeof clima.main !== "undefined") ? (
          <ClimaCard
            clima={clima}
            obtenerFecha={obtenerFecha}
          />
        ) : ('')}
      </main>
    </div>
  );
}

export default Clima