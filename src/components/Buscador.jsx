import React from 'react';

const Buscador = ({ consulta, setConsulta, buscarClima }) => {
  const handleInputChange = (evento) => {
    setConsulta(evento.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar:"
      value={consulta}
      onChange={handleInputChange}
      onKeyPress={buscarClima}
    />
  );
};

export default Buscador;