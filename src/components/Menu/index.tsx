import { UserAuth } from "../../providers/userAuth";
import { FiLogOut } from "react-icons/fi";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Flex,
  Center,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, Logout } = UserAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="8vh" />
      <DrawerContent ml="auto" mt="80px" w={["300px", "300px", "400px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.50"
          color="gray.400"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex align="center" onClick={Logout} _hover={{ cursor: "pointer" }}>
            <Center
              w="60px"
              h="60px"
              bg="red.500"
              borderRadius="md"
              fontSize="2xl"
            >
              <FiLogOut color="white" />
            </Center>
            <Box pb="4" mt="4">
              <Heading as="h2" fontSize="lg">
                Sair da minha Conta
              </Heading>
              <Text fontSize="small" color="gray.200">
                Sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
