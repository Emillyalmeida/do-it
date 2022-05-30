import { Center, Flex, Button, useDisclosure } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { Input } from "../Form";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";

import ModalCreateTask from "../Modal/ModalCreatetask";

const SearchBox = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const { accessToken } = UserAuth();
  const { searchTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    const { search } = data;
    searchTask(search, accessToken);
  });

  return (
    <>
      <ModalCreateTask onClose={onClose} isOpen={isOpen} />
      <Flex
        mt="8"
        paddingX={["6", "6", "8"]}
        paddingY="4"
        borderBottom="1px"
        borderColor="gray.50"
        flexDirection={["column", "column", "row"]}
      >
        <Flex as="form" onSubmit={onSubmit}>
          <Input
            placeholder="Pesquisar por tarefa"
            w={["90%", "90%", "35vw"]}
            {...register("search")}
          />
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
          ml={["0", "0", "6"]}
          fontSize="2xl"
          borderRadius="8px"
          paddingX="19"
          _hover={{ bg: "purple.600" }}
          w={["95%", "95%", "auto"]}
          pt={["4", "4", "0"]}
          onClick={onOpen}
        >
          Adicionar nova tarefa
        </Button>
      </Flex>
    </>
  );
};

export default SearchBox;
