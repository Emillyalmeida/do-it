import { Center, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../Form";
import ModalCreateTask from "../Modal/ModalCreatetask";

const SearchBox = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalCreateTask onClose={onClose} isOpen={isOpen} />
      <Flex
        mt="8"
        paddingX={["6", "6", "8"]}
        paddingY="4"
        borderBottom="1px"
        borderColor="gray.50"
      >
        <Flex as="form">
          <Input name="search" placeholder="Pesquisar por tarefa" />
          <Center
            as="button"
            bg="purple.600"
            borderRadius="8px"
            w="65px"
            h="60px"
            ml="2"
            fontSize="2xl"
            _hover={{ bg: "purple.700" }}
          >
            <FaSearch color="white" />
          </Center>
        </Flex>

        <Button
          bg="purple.500"
          h="60px"
          ml="6"
          fontSize="2xl"
          borderRadius="8px"
          paddingX="19"
          _hover={{ bg: "purple.600" }}
          onClick={onOpen}
        >
          Adicionar nova tarefa
        </Button>
      </Flex>
    </>
  );
};

export default SearchBox;
