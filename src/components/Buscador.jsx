import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Buscador = ({ consulta, setConsulta, pedirClima }) => {
  const handleInputChange = (e) => {
    setConsulta(e.target.value);
  };

  const handleButtonClick = () => {
    pedirClima({ key: 'Enter' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      pedirClima(e);
    }
  };

  return (
    <div className="d-flex">
      <Form.Control
        type="text"
        placeholder="Introduzca una ciudad cualquiera. Por ej. Toronto"
        value={consulta}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="primary" className='ms-2' onClick={handleButtonClick}>
        Buscar
      </Button>
    </div>
  );
};

export default Buscador;