import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useList } from '../../ListContext';

export function MenuResponsive({ list, isDisabled, setId, onOpenUpdate }: any) {
  const { setLists } = useList();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  const menuRef = useRef<HTMLButtonElement>(null);

  function handleOpenMenuInMobile() {
    if (menuRef.current?.parentElement?.parentElement) {
      menuRef.current.parentElement.parentElement.style.height =
        menuRef.current.parentElement.parentElement.offsetHeight + 215 + 'px';
    }
  }

  function handleCloseMenuInMobile() {
    if (menuRef.current?.parentElement?.parentElement) {
      menuRef.current.parentElement.parentElement.style.height =
        menuRef.current.parentElement.parentElement.offsetHeight - 215 + 'px';
    }
  }

  return (
    <Menu
      gutter={isLargerThan480 ? 8 : -195}
      onOpen={isLargerThan480 ? () => {} : handleOpenMenuInMobile}
      onClose={isLargerThan480 ? () => {} : handleCloseMenuInMobile}
    >
      <MenuButton as={Button} ref={menuRef} backgroundColor="blue.500">
        <BsThreeDotsVertical />
      </MenuButton>
      <MenuList backgroundColor="gray.700" borderColor="blue.500">
        <Link href={`/lists/sublists/${list.id}`} _hover={{}}>
          <MenuItem
            isDisabled={isDisabled}
            color="blue.500"
            fontWeight="bold"
            _hover={{ backgroundColor: 'gray.600' }}
          >
            Adicionar sublistas
          </MenuItem>
        </Link>
        <MenuDivider borderColor="blue.500" />
        <MenuItem
          isDisabled={isDisabled}
          color="yellow.500"
          fontWeight="bold"
          _hover={{ backgroundColor: 'gray.600' }}
          onClick={() => {
            setId(list.id);
            onOpenUpdate();
          }}
        >
          Atualizar lista
        </MenuItem>
        <MenuDivider borderColor="blue.500" />
        <MenuItem
          color="red.500"
          fontWeight="bold"
          _hover={{ backgroundColor: 'gray.600' }}
          onClick={() => {
            setLists((state) => state.filter((item) => item.id !== list.id));
          }}
        >
          Deletar lista
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
