import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Link,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Create New Task',
    path: '/new',
  },
];

const NavLink = ({ children, link }) => (
  <Link
    as={ReactLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.600',
    }}
    to={link}
  >
    {children}
  </Link>
);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={10} w={'100%'}>
      <Flex
        h={16}
        spacing={4}
        alignItems='center'
        justifyContent='space-between'
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          _hover={{
            bg: 'gray.600',
            color: 'white',
          }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems='center' minWidth='100%' ml={2}>
          <Box fontWeight='bold' fontSize='md'>
            <ReactLink to={'/'}>React MySQL</ReactLink>
          </Box>
          <Spacer />
          <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} link={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} link={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
