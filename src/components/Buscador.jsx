import React from 'react';
import { Form } from 'react-bootstrap';

const Buscador = ({ consulta, setConsulta, pedirClima }) => {
  const handleInputChange = (evento) => {
    setConsulta(evento.target.value);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Buscar:"
      value={consulta}
      onChange={handleInputChange}
      onKeyPress={pedirClima}
    />
  );
};

export default Buscador;