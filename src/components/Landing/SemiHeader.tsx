import { Box, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

export function SemiHeader() {
  return (
    <>
      <Box bgColor="gray.900" paddingBottom="150px">
        <Flex justifyContent="space-evenly">
          <Box
            height={500}
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box mb="10">
              <Text fontSize={['xl', '2xl']} fontWeight="bold" textAlign="left">
                🖐 Bem vindo.
              </Text>
              <Text fontSize={['4xl', '5xl']} fontWeight="bold">
                Crie e organize suas ideias.
              </Text>
              <Text fontSize={['2xl', '3xl']} fontWeight="bold">
                Clique aqui para criar sua{' '}
                <Text as="span" color="blue.500">
                  lista <ArrowDownIcon marginLeft="-6px" />
                </Text>
              </Text>
            </Box>

            <Box>
              <Link href="/lists" _hover={{ textDecoration: false }}>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  size="md"
                  width="80"
                  fontSize="18"
                >
                  Navegar até lista
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            height={500}
            textAlign="center"
            display={['none', 'flex']}
            flexDirection="column"
            justifyContent="center"
            marginRight="30"
            marginTop="10"
          >
            <Image src="/todo.svg" width={500} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
