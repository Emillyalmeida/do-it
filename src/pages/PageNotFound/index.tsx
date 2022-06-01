import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgNoyFound from "../../assets/imgNotfound.svg";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const History = useHistory();
  return (
    <Flex
      h={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="space-evenly"
      flexDir={["column-reverse", "column-reverse", "row", "row"]}
      p={["10px 15px", "10px 15px", "0px", "0px"]}
      color="gray.800"
    >
      <Box w="300px" mt="4" maxW="500px">
        <Heading mt="4" fontSize="4xl">
          Ooops!
        </Heading>
        <Text mt="4" fontSize="lg">
          Não encotramos a página que você procurou,{" "}
          <b>vamos tentar novamente.</b>
        </Text>
        <Button
          bg="red.500"
          color="white"
          borderRadius="8px"
          w="100%"
          h="60px"
          mt="4"
          _hover={{ bg: "red.600" }}
          onClick={() => History.push("/login")}
        >
          Ir para minhas tarefas
        </Button>
      </Box>
      <Image src={imgNoyFound} />
    </Flex>
  );
};

export default PageNotFound;
