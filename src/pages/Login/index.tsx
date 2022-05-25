import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import logoMain from "../../assets/logo-main.svg";
import Input from "../../components/Form";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
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
        <Grid w="90%" pr="100px">
          <Image src={logoMain} alt="logo doit"></Image>
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            flexível e atrativo de gerenciar seus projetos em uma única
            plataforma
          </Text>
        </Grid>
        <Grid
          w="80%"
          as="form"
          mt="4"
          p="30px 15px"
          bg="white"
          color="gray.600"
          border="3px solid white"
        >
          <Heading as="h2"> Bem Vindo de volta !!</Heading>
          <VStack mt="7" spacing="4">
            <Input
              icon={FaEnvelope}
              label="Email"
              {...register("email")}
              placeholder="Digite seu Login"
            />
            <Input
              icon={FaLock}
              label="Senha"
              {...register("password")}
              placeholder="Digite sua senha"
            />
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Login;
