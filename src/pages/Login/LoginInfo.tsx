import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import logoMain from "../../assets/logo-main.svg";

const LoginInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} pr={["30px", "50px", "120px"]}>
      <Image
        boxSize={["120px", "120px", "180px", "180px"]}
        src={logoMain}
        alt="logo doit"
      ></Image>
      <Heading as="h1">O jeito fácil, grátis</Heading>
      <Text mt="4" w={["250px", "300px", "350px", "350px"]}>
        flexível e atrativo de gerenciar seus projetos em uma única plataforma
      </Text>
    </Grid>
  );
};

export default LoginInfo;
