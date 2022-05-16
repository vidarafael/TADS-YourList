import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsCaretDownFill, BsThreeDots } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ParentList } from '../components/Sublists/ParentList';
import { Header } from '../components/Sublists/Header';
import { InputAddingParentList } from '../components/Sublists/InputAddingParentList';
import { AiFillFilePdf } from 'react-icons/ai';

export function Sublists() {
  const { id } = useParams();

  return (
    <>
      <style>{`
        @page { size: auto;  margin: 0mm; }
        @media print {
          .print {
            color: black;
          }

          .no-print {
            display: none;
          }
        }
      `}</style>
      <Header urlParams={id} />
      <Box maxWidth="1300" margin="70px auto" px="25px">
        <Box
          display="flex"
          alignItems="center"
          marginBottom="15px"
          justifyContent="space-between"
        >
          <Text className="print" fontWeight="bold" fontSize="2xl">
            Sublistas
            <BsCaretDownFill
              style={{
                display: 'inline-block',
                marginLeft: '5px',
                fontSize: '15px',
              }}
            />
          </Text>
          <Menu>
            <MenuButton
              as={Button}
              width="40px"
              height="40px"
              backgroundColor="gray.800"
              borderRadius="50%"
              className="no-print"
              _hover={{ backgroundColor: 'blue.700', transition: '0.3s' }}
            >
              <BsThreeDots style={{ transform: 'translateX(-4px)' }} />
            </MenuButton>
            <MenuList
              backgroundColor="gray.700"
              borderColor="blue.500"
              className="no-print"
            >
              <MenuItem
                color="red.500"
                fontWeight="bold"
                _hover={{ backgroundColor: 'gray.600' }}
                onClick={() => {
                  window.print();
                }}
              >
                <Text>
                  Exportar p/ PDF
                  <AiFillFilePdf
                    style={{
                      display: 'inline-block',
                      fontSize: '22px',
                      marginLeft: '10px',
                      transform: 'translateY(5px)',
                    }}
                  />
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <ParentList id={id} />
        <InputAddingParentList id={id} />
      </Box>
    </>
  );
}
