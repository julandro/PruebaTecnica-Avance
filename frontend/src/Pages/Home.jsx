import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Tabla } from '../Components/Table';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Documentos } from '../Components/Documento';

function Home() {
  const [url, setUrl] = useState('empresa');
  const [datosApi, setDatosApi] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6001/api/${url}`).then((response) => {
      setDatosApi(response.data);
    });
  }, [url]);
  return (
    <div>
      <div class="App">
        <Link to="/tablas">
          <Button colorScheme="blue" onClick={() => setUrl('empresa')}>
            Empresa
          </Button>
        </Link>
        <Link to="/tablas">
          <Button colorScheme="blue" onClick={() => setUrl('tipodocumento')}>
            Tipo Documento
          </Button>
        </Link>
        <Link to="/tablas">
          <Button colorScheme="blue" onClick={() => setUrl('estado')}>
            Estado
          </Button>
        </Link>
        <Link to="/tablas">
          <Button colorScheme="blue" onClick={() => setUrl('numeracion')}>
            Numeracion
          </Button>
        </Link>
        <Link to="/documentos">
          <Button colorScheme="blue">Documento</Button>
        </Link>
      </div>
      <Route path="/tablas">
        <Tabla datos={datosApi} />
      </Route>
      <Route path="/documentos">
        <Documentos />
      </Route>
    </div>
  );
}

export default Home;
