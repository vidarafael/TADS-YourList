import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useList } from '../../ListContext';

interface InputAddingParentListProps {
  id: string | undefined;
}

export function InputAddingParentList({ id }: InputAddingParentListProps) {
  const { setLists } = useList();
  const [text, setText] = useState('');

  return (
    <>
      <style>{`
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
      <Box
        backgroundColor="gray.700"
        padding="5px"
        borderRadius="10px"
        className="no-print"
      >
        <InputGroup size="md">
          <Input
            fontWeight="bold"
            backgroundColor="gray.700"
            placeholder="Adicionar sublista"
            borderColor="blue.500"
            _hover={{ borderColor: 'blue.400' }}
            _placeholder={{ color: '', fontWeight: '700' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              size="xs"
              colorScheme="blue"
              variant="solid"
              margin="auto 0"
              onClick={() => {
                if (text !== '') {
                  setLists((prevState) => {
                    return prevState.map((state) => {
                      if (state.id === id) {
                        state.tasks.push({
                          id: uuidv4(),
                          description: text,
                          isFinished: false,
                          isEditable: false,
                        });
                      }
                      return state;
                    });
                  });

                  setText('');
                }
              }}
            >
              <AddIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
}
