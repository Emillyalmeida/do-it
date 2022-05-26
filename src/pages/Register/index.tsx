import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserAuth } from "../../providers/userAuth";

import RegisterInfo from "./RegisterInfo";
import RegisterForm from "./RegisterForm";

import { Input } from "../../components/Form";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import ButtonBack from "./ButtonBack";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Tamanho minimo 8 caracters"),
    confirmPassword: yup
      .string()
      .required("Confimação de email obrigatoria")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataRegister>({ resolver: yupResolver(schema) });

  interface dataRegister {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
  }

  const { loading } = UserAuth();

  const onSubmit = (data: dataRegister) => {
    const { email, password, name } = data;
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      h={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.700 65%, white 35%)",
        "linear(to-b, purple.700 65%, white 35%)",
        "linear(to-l, purple.700 65%, white 35%)",
        "linear(to-l, purple.700 65%, white 35%)",
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
        {isWideVersion ? (
          <>
            <ButtonBack top="150px" left="40px" />
            <RegisterForm onsubmit={handleSubmit(onSubmit)} loading={loading}>
              <Box w="100%">
                <Input
                  icon={FaUser}
                  label="Nome"
                  {...register("name")}
                  placeholder="Digite seu Nome"
                  error={errors.name}
                />
                {!errors.name && (
                  <Text ml="1" mt="1" color="gray.300">
                    Exemplo: name
                  </Text>
                )}
              </Box>
              <Box w="100%">
                <Input
                  icon={FaEnvelope}
                  label="Email"
                  {...register("email")}
                  placeholder="Digite seu Register"
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
              <Box w="100%">
                <Input
                  icon={FaLock}
                  label="Confirme senha"
                  {...register("confirmPassword")}
                  placeholder="Confirme sua senha"
                  error={errors.confirmPassword}
                />
              </Box>
            </RegisterForm>
            <RegisterInfo />
          </>
        ) : (
          <>
            <ButtonBack top="15px" left="75vw" />
            <RegisterInfo />

            <RegisterForm onsubmit={handleSubmit(onSubmit)} loading={loading}>
              <Box w="100%">
                <Input
                  icon={FaUser}
                  label="Nome"
                  {...register("name")}
                  placeholder="Digite seu Nome"
                  error={errors.name}
                />
                {!errors.name && (
                  <Text ml="1" mt="1" color="gray.300">
                    Exemplo: name
                  </Text>
                )}
              </Box>
              <Box w="100%">
                <Input
                  icon={FaEnvelope}
                  label="Email"
                  {...register("email")}
                  placeholder="Digite seu Register"
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
              <Box w="100%">
                <Input
                  icon={FaLock}
                  label="Confirme senha"
                  {...register("confirmPassword")}
                  placeholder="Confirme sua senha"
                  error={errors.confirmPassword}
                />
              </Box>
            </RegisterForm>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Register;
