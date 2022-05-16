import {
  Box,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useList } from '../../ListContext';
import { MenuResponsive } from './MenuResponsive';
import { useEffect, useRef, useState } from 'react';

interface IListTableProps {
  onOpenUpdate: () => void;
  setId: (id: string) => void;
}

export function ListTable({ onOpenUpdate, setId }: IListTableProps) {
  const { lists, setLists } = useList();

  return (
    <>
      <TableContainer>
        <Table>
          <Thead backgroundColor="gray.700">
            <Tr>
              <Th color="blue.500" borderColor="gray.700">
                Título
              </Th>
              <Th color="blue.500" borderColor="gray.700">
                Descrição
              </Th>
              <Th color="blue.500" borderColor="gray.700">
                Status
              </Th>
              <Th color="blue.500" borderColor="gray.700">
                Criado em
              </Th>
              <Th color="blue.500" borderColor="gray.700">
                Controle
              </Th>
            </Tr>
          </Thead>
          <Tbody backgroundColor="gray.700" textColor="white">
            {lists.map((list, i) => {
              const isDisabled = list.status === 'finished';
              return (
                <Tr key={list.id} transition={'0.3s'}>
                  <Td
                    fontWeight="bold"
                    borderColor="gray.600"
                    // ref={(el) => {
                    //   if (el) rowTable.current[i] = el;
                    // }}
                  >
                    {list.title}
                  </Td>
                  <Td color="gray.300" borderColor="gray.600">
                    {list.description}
                  </Td>
                  <Td borderColor="gray.600">
                    <Select
                      value={list.status}
                      backgroundColor={
                        list.status === 'notfinished' ? '#C53030' : '#3182ce'
                      }
                      color="white"
                      fontWeight="bold"
                      border="none"
                      onChange={(event) => {
                        list.status = event.target.value;
                        setLists([...lists]);
                      }}
                    >
                      <option
                        value="notfinished"
                        style={{
                          backgroundColor: '#C53030',
                          fontWeight: 'bold',
                        }}
                      >
                        Não Finalizado
                      </option>
                      <option
                        value="finished"
                        style={{
                          backgroundColor: '#3182ce',
                          fontWeight: 'bold',
                        }}
                      >
                        Finalizado
                      </option>
                    </Select>
                  </Td>
                  <Td fontSize="14px" color="gray.300" borderColor="gray.600">
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(list.createdAt)
                    )}
                  </Td>
                  <Td borderColor="gray.600">
                    <MenuResponsive
                      list={list}
                      isDisabled={isDisabled}
                      setId={setId}
                      onOpenUpdate={onOpenUpdate}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        bgColor="gray.700"
        borderBottomRadius="5px"
        height="50px"
        color="white"
      ></Box>
    </>
  );
}
