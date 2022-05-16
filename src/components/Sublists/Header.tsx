import { Box, Link, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useList } from '../../ListContext';

interface ISubList {
  id: string;
  description: string;
  isFinished: boolean;
  isEditable: boolean;
}

interface ILists {
  id: string;
  title: string;
  description: string;
  status: string;
  tasks: ISubList[];
  createdAt: Date;
}

interface HeaderProps {
  urlParams: string | undefined;
}

export function Header({ urlParams }: HeaderProps) {
  const [list, setList] = useState<ILists>({} as ILists);
  const { lists } = useList();

  useEffect(() => {
    console.log(urlParams);
    const alreadyExistsList = lists.find((item) => item.id === urlParams);

    if (!alreadyExistsList) {
      return;
    }

    setList(alreadyExistsList);
    console.log(list);
  }, [lists]);

  return (
    <>
      <Box maxWidth="1300" margin="50px auto" px="15px">
        <Box display="flex" alignItems="center">
          <Link href="/lists" _hover={{}}>
            <Box
              display="flex"
              width="40px"
              height="40px"
              backgroundColor="gray.800"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              _hover={{ backgroundColor: 'blue.600', transition: '0.3s' }}
            >
              <BsChevronLeft
                style={{
                  color: 'white',
                  fontSize: '24px',
                  display: 'inline-block',
                  marginRight: '5px',
                }}
              />
            </Box>
          </Link>

          <Text
            fontSize="3xl"
            fontWeight="bold"
            marginLeft="24px"
            color="blue.500"
          >
            {list.title}
          </Text>
        </Box>
      </Box>
    </>
  );
}
