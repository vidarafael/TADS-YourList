import { Box, Text, Image } from '@chakra-ui/react';

export function NoList() {
  return (
    <>
      <Box
        bgColor="gray.700"
        color="black"
        padding="25px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Text fontSize="5xl" fontWeight="bold" color="blue.500">
            Nenhuma lista criada.
          </Text>
        </Box>
        <Box>
          <Image src="/notlist.svg" width={400} />
        </Box>
      </Box>
      <Box
        bgColor="gray.700"
        borderBottomRadius="5px"
        height="50px"
        color="black"
        borderTop="1px solid #3182ce"
      ></Box>
    </>
  );
}
