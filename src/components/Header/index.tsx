import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";
import logo from "../../assets/Icon.svg";
import { theme } from "../../styles/theme";
import Menu from "../Menu";

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Flex borderBottom="1" borderColor="gray.50" paddingY="2" paddingX="8">
      <Flex align="center">
        <Image src={logo} />
        <Heading ml="3" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center as="button" onClick={onToggle} fontSize="1rem" ml="auto">
        <FaTh color={theme.colors.gray["300"]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
