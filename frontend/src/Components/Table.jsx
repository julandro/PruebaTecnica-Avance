import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { EditIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export function Tabla(api) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>{console.log(api.datos)}</TableCaption>
        <Thead>
          <Tr>
            {api.datos.length > 0 &&
              Object.keys(api.datos[0]).map((key) => <Th>{key}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {api.datos.map((datos, index) => (
            <Tr key={index}>
              {Object.values(datos).map((value, subIndex) => (
                <Td>
                  {value !== null && value !== undefined
                    ? value.toString()
                    : 'N/A'}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
