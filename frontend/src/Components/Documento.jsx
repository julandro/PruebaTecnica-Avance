import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
} from '@chakra-ui/react';

import { EditIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons';

export function Documentos() {
  //
  const [iddocumento, setIdDocumento] = useState();
  const [idnumeracion, setIdNumeracion] = useState();
  const [idestado, setIdEstado] = useState();
  const [numero, setNumero] = useState();
  const [fecha, setFecha] = useState();
  const [base, setBase] = useState();
  const [impuestos, setImpuestos] = useState();

  const [datosApi, setDatosApi] = useState([]);
  const [datosApiNum, setDatosApiNum] = useState([]);
  const [datosApiEstado, setDatosApiEstado] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios.get(`http://localhost:6001/api/documento`).then((response) => {
      setDatosApi(response.data);
    });
  }, []);

  function getApis() {
    axios.get(`http://localhost:6001/api/numeracion`).then((response) => {
      setDatosApiNum(response.data);
    });
    axios.get(`http://localhost:6001/api/estado`).then((response) => {
      setDatosApiEstado(response.data);
    });
  }

  const onDelete = (id) => {
    let confirmacion = window.confirm('¿Estas seguro de eliminar?');
    if (confirmacion === true) {
      axios
        .delete(`http://localhost:6001/api/documento/${id}`)
        .then((respuesta) => {
          alert('Se elimino correctamente');
          window.location.reload();
        });
    }
  };

  function postData(e) {
    e.preventDefault();
    const data = {
      idnumeracion,
      idestado,
      numero,
      fecha,
      base,
      impuestos,
    };
    console.log(data);
    axios
      .post(`http://localhost:6001/api/documento`, data)
      .then((respuesta) => {
        //console.log(respuesta.data);
        alert('Registro guardado');
        window.location.href = '/';
      });
  }

  return (
    <div>
      <div class="mx-5 my-4">
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            onOpen();
            getApis();
          }}
        >
          Crear Documento
        </Button>
      </div>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>iddocumento</Th>
              <Th>idnumeracion</Th>
              <Th>idestado</Th>
              <Th>numero</Th>
              <Th>fecha</Th>
              <Th>base</Th>
              <Th>impuestos</Th>
              <Th>Opciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {datosApi.map((datos, index) => (
              <Tr key={index}>
                {Object.values(datos).map((value, subIndex) => (
                  <Td>
                    {value !== null && value !== undefined
                      ? value.toString()
                      : 'N/A'}
                  </Td>
                ))}
                <Td>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    //onClick={() => onDelete(datos.iddocumento)}
                    onClick={() =>
                      alert(
                        'No se puede eliminar por restricciones de llave externa'
                      )
                    }
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
            <EditIcon></EditIcon>
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Documento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Seleccione el idnumeracion"
              value={idnumeracion}
              onChange={(e) => setIdNumeracion(e.target.value)}
            >
              {datosApiNum.map((datos) => {
                return (
                  <option
                    value={datos.idnumeracion}
                    onChange={(e) => setIdNumeracion(e.target.value)}
                  >
                    {datos.idnumeracion}
                  </option>
                );
              })}
            </Select>
            <Select
              placeholder="Seleccione el estado"
              value={idestado}
              onChange={(e) => setIdEstado(e.target.value)}
            >
              {datosApiEstado.map((datos) => {
                return (
                  <option
                    value={datos.idestado}
                    onChange={(e) => setIdEstado(e.target.value)}
                  >
                    {datos.descripcion}
                  </option>
                );
              })}
            </Select>
            <Input
              placeholder="Ingrese el numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <Input
              placeholder="Ingrese la fecha (YYYY-MM-DD)"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <Input
              placeholder="base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
            <Input
              placeholder="impuestos"
              value={impuestos}
              onChange={(e) => setImpuestos(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={postData}>
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    //iddocumento, idnumeracion, idestado, numero, fecha, base, impuestos
  );
}
