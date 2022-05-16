import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Checkbox, useToast, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useList } from '../../ListContext';

interface ISubList {
  id: string;
  description: string;
  isFinished: boolean;
  isEditable: boolean;
}

interface ParentlistProps {
  id: string | undefined;
}

export function ParentList({ id }: ParentlistProps) {
  const { lists, setLists } = useList();
  const [textUpdate, setTextUpdate] = useState('');
  const toast = useToast();

  function handleUpdateSublist(sublist: ISubList) {
    setTextUpdate(sublist.description);

    setLists((prevState) => {
      return prevState.map((itemList) => {
        if (itemList.id === id) {
          itemList.tasks.map((itemTask) => {
            if (itemTask.id !== sublist.id) {
              itemTask.isEditable = false;
            } else {
              itemTask.isEditable = true;
            }
            return itemTask;
          });
        }
        return itemList;
      });
    });
  }

  function handleSaveUpdateSublist(sublist: ISubList) {
    if (textUpdate === '') {
      return toast({
        title: 'Preencha a sublista',
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }

    setLists((prevState) => {
      return prevState.map((itemList) => {
        if (itemList.id === id) {
          itemList.tasks.map((itemTask) => {
            if (itemTask.id === sublist.id) {
              itemTask.description = textUpdate;
              itemTask.isEditable = false;
            }
            return itemTask;
          });
        }
        return itemList;
      });
    });

    setTextUpdate('');
  }

  return (
    <>
      <style>{`
        @media print {
          .print {
            color: black;
          }
        }
      `}</style>
      {lists.map((item) => {
        return (
          item.id === id &&
          item.tasks.map((task) => (
            <Box
              key={task.id}
              backgroundColor={
                task.isFinished ? 'rgba(45, 55, 72, 0.4)' : 'rgb(45, 55, 72)'
              }
              borderRadius="10px"
              border="2px solid"
              borderColor={
                task.isFinished ? 'rgb(56, 161, 105, 0.5)' : 'rgb(45, 55, 72)'
              }
              display="flex"
              padding="10px"
              marginBottom="15px"
              alignItems="center"
              justifyContent="space-between"
              style={{
                transition: '0.3s',
              }}
            >
              <Box marginRight="10px" display="flex" alignItems="center">
                <Checkbox
                  size="lg"
                  colorScheme="blue"
                  borderColor="blue.500"
                  isChecked={task.isFinished}
                  onChange={() => {
                    if (!task.isEditable) {
                      setLists((prevState) => {
                        return prevState.map((state) => {
                          if (state.id === id) {
                            state.tasks.map((stateTask) => {
                              if (stateTask.id === task.id) {
                                stateTask.isFinished = !stateTask.isFinished;
                              }
                              return stateTask;
                            });
                          }
                          return state;
                        });
                      });
                    }
                  }}
                />
              </Box>
              <Box marginRight="10px" flex="1">
                {!task.isEditable ? (
                  <Text
                    fontWeight="bold"
                    color={
                      task.isFinished ? 'rgba(255, 255, 255, 0.5)' : 'white'
                    }
                    className="print"
                    wordBreak="break-word"
                  >
                    {task.description}
                  </Text>
                ) : (
                  <Input
                    borderColor="blue.500"
                    _hover={{ borderColor: 'blue.400' }}
                    value={textUpdate}
                    onChange={(e) => {
                      setTextUpdate(e.target.value);
                    }}
                  />
                )}
              </Box>
              <Box>
                {!task.isEditable ? (
                  <Button
                    width="5px"
                    height="25px"
                    marginRight="5px"
                    backgroundColor="yellow.500"
                    _hover={{ backgroundColor: 'yellow.600' }}
                    isDisabled={task.isFinished}
                    onClick={() => handleUpdateSublist(task)}
                  >
                    <EditIcon />
                  </Button>
                ) : (
                  <Button
                    width="5px"
                    height="25px"
                    marginRight="5px"
                    backgroundColor="green.500"
                    _hover={{ backgroundColor: 'green.600' }}
                    isDisabled={task.isFinished}
                    onClick={() => handleSaveUpdateSublist(task)}
                  >
                    <CheckIcon />
                  </Button>
                )}

                <Button
                  width="5px"
                  height="25px"
                  backgroundColor="red.500"
                  _hover={{ backgroundColor: 'red.600' }}
                  onClick={() => {
                    setLists((prevState) => {
                      return prevState.map((itemList) => {
                        if (itemList.id === id) {
                          itemList.tasks = itemList.tasks.filter(
                            (itemTask) => itemTask.id !== task.id
                          );
                        }
                        return itemList;
                      });
                    });
                  }}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            </Box>
          ))
        );
      })}
    </>
  );
}
