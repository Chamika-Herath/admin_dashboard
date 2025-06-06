import {
  Box,
  VStack,
  Button,
  useColorModeValue,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import logo from '../assets/logo.png'; // Make sure this is correct

const navItems = ['Dashboard', 'Data Lab', 'Surveys', 'Library', 'Marketplace'];

const SidebarContent = ({ onClose }) => (
  <Box
    w="250px"
    minH="100vh"
    bg={useColorModeValue('blue.600', 'gray.900')}
    color="white"
    p={5}
  >
    <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
      <Image src={logo} alt="Logo" boxSize="50px" />
    </Box>

    <VStack spacing={4} align="stretch">
      {navItems.map((item) => (
        <Button
          key={item}
          variant="ghost"
          justifyContent="start"
          color="white"
          _hover={{ bg: 'blue.700' }}
          onClick={onClose}
        >
          {item}
        </Button>
      ))}
    </VStack>
  </Box>
);

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('blue.600', 'gray.900');

  return (
    <>
      {/* Desktop sidebar */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position="fixed"
        left="0"
        top="0"
        height="100vh"
        width="250px"
        zIndex="100"
      >
        <SidebarContent onClose={() => {}} />
      </Box>

      {/* Mobile header with hamburger */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        bg={bg}
        color="white"
        p={4}
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
        zIndex="999"
        boxShadow="md"
      >
        <Image src={logo} alt="Logo" boxSize="40px" />
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
          colorScheme="whiteAlpha"
          aria-label="Open Menu"
        />
      </Flex>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg} color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
