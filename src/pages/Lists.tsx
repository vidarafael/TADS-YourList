import { Box, Text, Button, Link, useDisclosure } from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { AiOutlineHome } from 'react-icons/ai';
import { useState } from 'react';

import { NewListModal } from '../components/Lists/NewListModal';
import { useList } from '../ListContext';
import { UpdateListModal } from '../components/Lists/UpdateListModal';
import { ListTable } from '../components/Lists/ListTable';
import { NoList } from '../components/Lists/NoList';

export function Lists() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();
  const { lists } = useList();
  const [id, setId] = useState('');
  const alreadyExistsList = lists.length >= 1;

  return (
    <>
      <Box maxWidth="1300" margin="50px auto" px="15px">
        <Link href="/" _hover={{ transition: '0.3s' }}>
          <AiOutlineHome
            style={{
              color: 'rgb(49, 130, 206)',
              fontSize: '18px',
              display: 'inline-block',
              marginRight: '5px',
              transform: 'translateY(3px)',
            }}
          />
          <Text
            as="span"
            fontSize="1xl"
            color="blue.500"
            _hover={{ color: 'blue.300', transition: '0.3s' }}
          >
            Voltar para home
          </Text>
        </Link>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          marginTop="10px"
          marginLeft="10px"
        >
          Suas Listas
        </Text>
      </Box>
      <Box maxWidth="1300" margin="70px auto" px="25px" height="100vh">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="gray.700"
          padding={5}
          borderTopRadius="5px"
          borderBottom="1px solid #3182ce"
        >
          <Text fontSize="2xl" color="blue.500" fontWeight="bold">
            Listas
          </Text>
          <Button
            color="white"
            backgroundColor="blue.500"
            onClick={onOpen}
            _hover={{ backgroundColor: 'blue.400', transition: '0.3s' }}
          >
            <AddIcon margin="5px" /> adicionar lista
          </Button>
        </Box>

        {alreadyExistsList ? (
          <ListTable onOpenUpdate={onOpenUpdate} setId={setId} />
        ) : (
          <NoList />
        )}
      </Box>

      <NewListModal isOpen={isOpen} onClose={onClose} />
      <UpdateListModal isOpen={isOpenUpdate} onClose={onCloseUpdate} id={id} />
    </>
  );
}
