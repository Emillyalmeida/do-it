import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import logoMain from "../../assets/logo-main.svg";
import { Input } from "../../components/Form";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Tamanho minimo 8 caracters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataLogin>({ resolver: yupResolver(schema) });

  interface dataLogin {
    email: string;
    password: string;
  }
  const onSubmit: SubmitHandler<dataLogin> = (data) => console.log(data);

  return (
    <Flex
      h={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.700 65%, white 35%)",
        "linear(to-b, purple.700 65%, white 35%)",
        "linear(to-r, purple.700 65%, white 35%)",
        "linear(to-r, purple.700 65%, white 35%)",
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
        <Grid w={["100%", "100%", "50%", "50%"]} pr={["30px", "50px", "120px"]}>
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
        </Grid>
        <Grid
          w={["100%", "100%", "45%", "45%"]}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          mt={["5", "5", "0", "0"]}
          p="30px 15px"
          bg="white"
          color="gray.600"
          border="3px solid white"
        >
          <Heading as="h2"> Bem Vindo de volta !!</Heading>
          <VStack mt="7" spacing="4">
            <Box w="100%">
              <Input
                icon={FaEnvelope}
                label="Email"
                {...register("email")}
                placeholder="Digite seu Login"
                error={errors.email}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.300">
                  Exemplo: name@mail.com
                </Text>
              )}
            </Box>
            <Box w="100%">
              <Input
                icon={FaLock}
                label="Senha"
                {...register("password")}
                placeholder="Digite sua senha"
                error={errors.password}
              />
            </Box>
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              bg="purple.700"
              color="white"
              borderRadius="8px"
              w="100%"
              h="60px"
              type="submit"
              _hover={{ bg: "purple.800" }}
            >
              Entrar
            </Button>

            <Text color="gray.400">Ainda não possui uma conta?</Text>
            <Button borderRadius="8px" w="100%" h="60px" color="gray.300">
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Login;
