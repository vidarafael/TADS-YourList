import { Box, Text } from '@chakra-ui/react';

interface IInfoListProps {
  title: string;
  text: string;
}

export function InfoList({ title, text }: IInfoListProps) {
  return (
    <>
      <Box
        width={[300, 350]}
        height={280}
        border="1px solid #3182ce"
        backgroundColor="gray.50"
        padding="20px"
        textAlign="center"
        borderRadius="5px"
      >
        <Box>
          <Text fontSize="2xl" color="blue.500" fontWeight="bold">
            {title}
          </Text>
        </Box>
        <Box padding="15px">
          <Text fontSize="1xl" color="black" fontWeight="bold" textAlign="left">
            {text}
          </Text>
        </Box>
      </Box>
    </>
  );
}
// boxShadow="4px 4px 6px black"
