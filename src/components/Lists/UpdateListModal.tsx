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
import { useState, useEffect } from 'react';
import { useList } from '../../ListContext';

interface IListModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export function UpdateListModal({ isOpen, onClose, id }: IListModalProps) {
  const { lists, setLists } = useList();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const list = lists.find((item) => item.id === id);

    if (list) {
      setTitle(list.title);
      setDescription(list.description);
    }
  }, [isOpen]);

  const toast = useToast();

  function handleUpdate() {
    if (title === '' || description === '') {
      return toast({
        title: 'Preencha todos os campos',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }

    setLists((state) =>
      state.map((list) => {
        if (list.id === id) {
          list.title = title;
          list.description = description;
        }
        return list;
      })
    );

    toast({
      title: 'Lista atualizada com sucesso!',
      status: 'success',
      duration: 2500,
      isClosable: true,
    });

    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor="yellow.500" color="white">
        <ModalHeader>Atualizar Lista</ModalHeader>
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
            color="yellow.500"
            width="100%"
            onClick={handleUpdate}
          >
            Atualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
