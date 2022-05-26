import { Box, Flex, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserAuth } from "../../providers/userAuth";

import LoginInfo from "./LoginInfo";
import LoginForm from "./LoginForm";

import { Input } from "../../components/Form";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

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

  const { PostLogin, loading } = UserAuth();

  const onSubmit = (data: dataLogin) => {
    const { email, password } = data;
    PostLogin({ email, password });
  };

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
        <LoginInfo />
        <LoginForm onsubmit={handleSubmit(onSubmit)} loading={loading}>
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
        </LoginForm>
      </Flex>
    </Flex>
  );
};

export default Login;
