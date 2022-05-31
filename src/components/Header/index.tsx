import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";
import logo from "../../assets/Icon.svg";
import { theme } from "../../styles/theme";
import Menu from "../Menu";

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Flex
      bg="white"
      borderBottom="1px"
      borderColor="gray.50"
      paddingY="4"
      paddingX={["4", "4", "12"]}
    >
      <Flex align="center">
        <Image src={logo} />
        <Heading ml="3" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center as="button" onClick={onToggle} fontSize="2.25rem" ml="auto">
        <FaTh color={theme.colors.gray["300"]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
