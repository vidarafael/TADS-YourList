import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormLabel,
  FormControl,
  useToast,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { List } from '../../List';
import { useList } from '../../ListContext';

interface IListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewListModal({ isOpen, onClose }: IListModalProps) {
  const { lists, setLists } = useList();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const toast = useToast();

  function handleCreateList() {
    if (title === '' || description === '') {
      return toast({
        title: 'Preencha todos os campos',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }
    const list: any = new List(title, description, 'notfinished');

    setTitle('');
    setDescription('');

    setLists([...lists, list]);

    toast({
      title: 'Lista criada com sucesso!',
      status: 'success',
      duration: 2500,
      isClosable: true,
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="blue.500" color="white">
        <ModalHeader>Cadastrar Lista</ModalHeader>
        <ModalCloseButton
          backgroundColor="red.500"
          _hover={{ backgroundColor: 'red.600' }}
        />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">Título</FormLabel>
            <Input
              value={title}
              backgroundColor="white"
              color="black"
              placeholder="Digite um título para sua lista"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel fontWeight="bold">Descrição</FormLabel>
            <Input
              value={description}
              backgroundColor="white"
              color="black"
              placeholder="Digite uma descrição para sua lista"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="white"
            colorScheme="gray"
            color="blue.500"
            width="100%"
            onClick={handleCreateList}
          >
            Cadastrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
