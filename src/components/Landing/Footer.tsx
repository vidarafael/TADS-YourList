import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text, Image, Button, Link } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box backgroundColor="gray.50">
      <Box maxWidth="1300px" margin="0 auto" padding="10px" color="black">
        <Box textAlign="center" marginY="50px">
          <Text fontSize={['4xl', '5xl']} fontWeight="bold" color="blue.500">
            Funcionalidades da lista
          </Text>
        </Box>
        <Box marginY="50px">
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems="center"
          >
            <Box display={['none', 'block']}>
              <Image src="/todolistfunctions.png" width={900} />
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box
                padding="5px"
                textAlign="center"
                borderRadius="5px"
                backgroundColor="white"
                border="1px solid #3182ce"
                width="250px"
                height="150px"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
              >
                <Box>
                  <Text fontSize="2xl" color="blue.500" fontWeight="bold">
                    Adicionar
                  </Text>
                </Box>
                <Box padding="15px">
                  <Text fontSize="1xl" color="black" fontWeight="bold">
                    Essa aqui é clássica, ela adiciona uma lista para você.
                  </Text>
                </Box>
              </Box>
              <Box
                padding="5px"
                textAlign="center"
                borderRadius="5px"
                backgroundColor="white"
                border="1px solid #D69E2E"
                width="250px"
                height="150px"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
              >
                <Box>
                  <Text fontSize="2xl" color="yellow.500" fontWeight="bold">
                    Atualizar
                  </Text>
                </Box>
                <Box padding="15px">
                  <Text fontSize="1xl" color="black" fontWeight="bold">
                    Errou? Sem problemas basta um clique e atualize sua lista.
                  </Text>
                </Box>
              </Box>
              <Box
                padding="5px"
                textAlign="center"
                borderRadius="5px"
                backgroundColor="white"
                border="1px solid #E53E3E"
                width="250px"
                height="150px"
                _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
              >
                <Box>
                  <Text fontSize="2xl" color="red.500" fontWeight="bold">
                    Deletar
                  </Text>
                </Box>
                <Box padding="15px">
                  <Text fontSize="1xl" color="black" fontWeight="bold">
                    Ja utilizou das anotações de suas listas? Agora você pode
                    excluir sua lista.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/*                                     SUBLISTAS                                   */}
        <Box textAlign="center" marginTop="100px">
          <Text fontSize={['4xl', '5xl']} fontWeight="bold" color="blue.500">
            Funcionalidades da sublista
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          marginTop="50px"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginTop="40px"
            gap="20px"
          >
            <Box
              padding="5px"
              textAlign="center"
              borderRadius="5px"
              backgroundColor="white"
              border="1px solid #D53F8C"
              width="250px"
              height="150px"
              _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
            >
              <Box>
                <Text fontSize="2xl" color="pink.500" fontWeight="bold">
                  Todas das listas
                </Text>
              </Box>
              <Box padding="15px">
                <Text fontSize="1xl" color="black" fontWeight="bold">
                  As sublistas possuem todas as funcionalidades das listas.
                </Text>
              </Box>
            </Box>
            <Box
              padding="5px"
              textAlign="center"
              borderRadius="5px"
              backgroundColor="white"
              border="1px solid #38A169"
              width="250px"
              height="150px"
              _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
            >
              <Box>
                <Text fontSize="2xl" color="green.500" fontWeight="bold">
                  Concluir
                </Text>
              </Box>
              <Box padding="15px">
                <Text fontSize="1xl" color="black" fontWeight="bold">
                  Você pode concluir uma sublista para diferenciar das demais.
                </Text>
              </Box>
            </Box>
            <Box
              padding="5px"
              textAlign="center"
              borderRadius="5px"
              backgroundColor="white"
              border="1px solid #DD6B20"
              width="250px"
              height="150px"
              _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
            >
              <Box>
                <Text fontSize="2xl" color="orange.500" fontWeight="bold">
                  Exportar p/ PDF
                </Text>
              </Box>
              <Box padding="15px">
                <Text fontSize="1xl" color="black" fontWeight="bold">
                  Ja utilizou das anotações de suas listas? Agora você pode
                  excluir sua lista.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display={['none', 'block']}>
            <Image src="/sublistfunctions.png" width={900} />
          </Box>
        </Box>

        <Box textAlign="center" marginY="80px">
          <Text fontWeight="bold" fontSize={['4xl', '5xl']} color="blue.500">
            Comece agora a criar suas listas
          </Text>

          <Box marginY="10px">
            <Link href="/lists" _hover={{ textDecoration: false }}>
              <Button
                colorScheme="blue"
                variant="solid"
                size="md"
                width="80"
                fontSize="18"
              >
                Navegar até lista <ChevronRightIcon />
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
