import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logoMain from "../../assets/logo-main.svg";
import { FaForward } from "react-icons/fa";
import simpleImg from "../../assets/simpleHome.svg";

const LandingPage = () => {
  const history = useHistory();
  return (
    <Flex
      h={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.700 60%, white 40%)",
        "linear(to-b, purple.700 60%, white 40%)",
        "linear(to-r, purple.700 60%, white 40%)",
        "linear(to-r, purple.700 60%, white 40%)",
      ]}
      p={["10px 15px", "10px 15px", "0px", "0px"]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "70%"]}
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          w={["100%", "100%", "60%", "62%"]}
          pr={["30px", "50px", "80px", "120px"]}
          mb="10"
        >
          <Image
            boxSize={["120px", "120px", "180px", "180px"]}
            src={logoMain}
            alt="logo doit"
          ></Image>
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text mt="4" w={["250px", "300px", "350px", "350px"]}>
            flexível e atrativo de gerenciar seus projetos em uma única
            plataforma
          </Text>
          <HStack mt="12" spacing="3" w={["250px", "300px", "350px", "450px"]}>
            <Button
              bg="purple.500"
              color="white"
              borderRadius="8px"
              w="100%"
              h="60px"
              onClick={() => history.push("/login")}
              _hover={{ bg: "purple.800" }}
            >
              Entrar
            </Button>

            <Button
              borderRadius="8px"
              w="100%"
              h="60px"
              color="purple.500"
              _hover={{ bg: "gray.200", color: "gray.300" }}
              onClick={() => history.push("/register")}
            >
              Cadastrar
            </Button>
          </HStack>
        </Grid>
        <Grid
          w={["100%", "100%", "48%", "45%"]}
          pl={["30px", "50px", "80px", "125px"]}
          color="gray.800"
        >
          <VStack spacing="14" mt={["4", "4", "8", "8"]} w="100%">
            <Flex w="100%">
              <Center bg="purple.700" h="50px" minW="50px" borderRadius="5px">
                <FaForward color="white" size={"25"} />
              </Center>
              <Box ml="3">
                <Heading size="lg">Agilidade</Heading>
                <Text>
                  Agilize seus projetos com rapidez e muita performance
                </Text>
              </Box>
            </Flex>
            <Flex w="100%">
              <Center
                bgColor="purple.700"
                h="50px"
                minW="50px"
                borderRadius="5px"
              >
                <Image src={simpleImg} w="25px" color="white" />
              </Center>
              <Box ml="3">
                <Heading size="lg">Simplicidade</Heading>
                <Text>
                  Armazene seus projetos em uma interface altamente usual
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
