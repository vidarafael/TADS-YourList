import { Box, Text, Image } from '@chakra-ui/react';

import { InfoList } from './InfoList';

export function Content() {
  return (
    <>
      <Box bgColor="white">
        <Box
          maxWidth="1300px"
          margin="0 auto"
          paddingTop="50px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box textAlign={['center', 'left']}>
            <Text color="blue.500" fontSize={['5xl', '6xl']} fontWeight="bold">
              Sobre as listas
            </Text>
            <Text color="gray.600" fontSize="2xl" fontWeight="bold">
              Algumas informações <br />
              úteis sobre as listas.
            </Text>
          </Box>

          <Box
            border="1px solid white"
            padding="15px"
            borderRadius="15px"
            display={['none', 'flex']}
          >
            <Image src="/infolist.svg" width={500} />
          </Box>
        </Box>
        <Box maxWidth={1100} margin="150px auto 0" paddingBottom="200px">
          <Box
            display="flex"
            alignItems="center"
            flexDirection={['column', 'row']}
            gap="50px"
          >
            <InfoList
              title="Como criar lista?"
              text='Primeiramente devemos clicar no botão "Navegar até lista",
                  depois de navegarmos para a página, clique no botão criar lista e preencha as informações.'
            />
            <InfoList
              title="Existe um máximo de lista que posso ter?"
              text="O máximo de lista está em torno de 5MB de dados, que no caso é o armazenamento que o browser nos proporciona, quando exceder esse armazenamento não será mais possível salvar as listas."
            />

            <InfoList
              title="Cuidado ao limpar o histórico"
              text="As listas ficam salvas no armazenamento que os browsers fornecem, então ao limpar seu histórico tem risco de você perder suas listas salvas."
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
