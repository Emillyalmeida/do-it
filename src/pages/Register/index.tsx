import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import RegisterInfo from "./RegisterInfo";
import RegisterForm from "./RegisterForm";

import { Input } from "../../components/Form";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import ButtonBack from "./ButtonBack";
import { useState } from "react";
import api from "../../services/api";
import ModalError from "../../components/Modal/ModalError";
import ModalSuccess from "../../components/Modal/ModalSuccess";
import { useHistory } from "react-router-dom";

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

  const [loading, setLoading] = useState(false);

  const {
    isOpen: isOpenError,
    onOpen: onOpenError,
    onClose: onCloseError,
  } = useDisclosure();

  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();

  const history = useHistory();

  const onSubmit = (data: dataRegister) => {
    setLoading(true);
    const { email, password, name } = data;
    api
      .post("/register", { email, password, name })
      .then((res) => {
        setLoading(false);
        onOpenSuccess();
      })
      .catch((err) => {
        setLoading(false);
        onOpenError();
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <ModalError
        isOpen={isOpenError}
        onClose={onCloseError}
        secundaryMessage="Você já pode tentar novamente,<b> clicando</b> no botão acima ou
            aguarde alguns minutos..."
        error="Esse e-mail já esta em uso"
      />
      <ModalSuccess
        isOpen={isOpenSuccess}
        onClose={onCloseSuccess}
        buttonMessage="Ir para o login agora"
        secundaryMessage="Você já pode começar criando <b>suas listas</b> de tarefas agora
        mesmo..."
        message="Seu cadastro deu super certo, <b>vamos lá</b>"
        onClick={() => history.push("/login")}
      />
      <Flex
        h={["auto", "auto", "100vh", "100vh"]}
        minH={["auto", "auto", "800px", "800px"]}
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
          flexDirection={["column", "column", "row-reverse", "row-reverse"]}
          alignItems="center"
          justifyContent="center"
        >
          <ButtonBack
            top={isWideVersion ? "55px" : "35px"}
            left={isWideVersion ? "40px" : "70vw"}
          />
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
                type="password"
              />
            </Box>
            <Box w="100%">
              <Input
                icon={FaLock}
                label="Confirme senha"
                {...register("confirmPassword")}
                placeholder="Confirme sua senha"
                error={errors.confirmPassword}
                type="password"
              />
            </Box>
          </RegisterForm>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
