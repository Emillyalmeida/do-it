import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface NoTasksProps {
  onOpen: () => void;
}

const NoTasks = ({ onOpen }: NoTasksProps) => {
  return (
    <Box
      mt="4"
      w="90%"
      ml="5vw"
      display="flex"
      flexDir="column"
      justifyContent="center"
      borderWidth="2px"
      borderStyle="dashed"
      borderColor="gray.300"
      textAlign="center"
    >
      <Center flexDir="column" paddingY="12" paddingX="6">
        <FaClipboard fontSize="3.5rem" color={theme.colors.gray["300"]} />
        <Heading color="gray.800" mt="4">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text color="gray.300" mt="3" fontSize="xl">
          Insira sua meta e mostre a você mesmo sua <br />
          capacidade em cumprir suas atividades
        </Text>
        <Button
          bg="purple.700"
          h="60px"
          ml={["0", "0", "6"]}
          fontSize="xl"
          borderRadius="8px"
          paddingX="19"
          color="white"
          _hover={{ bg: "purple.800" }}
          w={["100%", "100%", "auto"]}
          mt={["4", "4", "6"]}
          onClick={onOpen}
        >
          Criar minha primeira tarefa
        </Button>
      </Center>
    </Box>
  );
};

export default NoTasks;
