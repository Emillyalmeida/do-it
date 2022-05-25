import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import logoMain from "../../assets/logo-main.svg";

const Login = () => {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      p="10px 15px"
      color="white"
    >
      <Flex
        w="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid w="100%" pr="100px">
          <Image src={logoMain} alt="logo doit"></Image>
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            flexível e atrativo de gerenciar seus projetos em uma única
            plataforma
          </Text>
        </Grid>
        <Grid
          as="form"
          mt="4"
          p="30px 15px"
          bg="white"
          color="gray.600"
          border="3px solid white"
        >
          <Heading> Bem Vindo de volta !!</Heading>
          <VStack mt="7" spacing="4"></VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Login;
