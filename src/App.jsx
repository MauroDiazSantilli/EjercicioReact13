import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import './App.css';
import Titulo from './components/Titulo';
import Clima from './components/Clima';

function App() {
  return (
    <>
      <section className='my-5 main'>
        <Container>
          <Titulo/>
          <Clima />
        </Container>
      </section>
      <footer className='bg-dark text-light py-4 text-center'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;