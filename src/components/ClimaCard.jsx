import React from 'react';
import { Card } from 'react-bootstrap';

const ClimaCard = ({ clima, obtenerFecha }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{clima.name}, {clima.sys.country}</Card.Title>
        <Card.Text>{obtenerFecha(new Date())}</Card.Text>
        <Card.Text>{Math.round(clima.main.temp)}°C</Card.Text>
        <Card.Text>{clima.weather[0].main}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClimaCard;