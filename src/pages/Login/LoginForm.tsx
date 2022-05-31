import { Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface LoginFormProps {
  loading: boolean;
  onsubmit: () => void;
  children: ReactNode;
}

const LoginForm = ({ children, onsubmit, loading }: LoginFormProps) => {
  const history = useHistory();

  return (
    <Grid
      w={["100%", "100%", "48%", "48%"]}
      as="form"
      onSubmit={onsubmit}
      mt={["5", "5", "0", "0"]}
      p="30px 15px"
      bg="white"
      color="gray.600"
      border="3px solid white"
      boxShadow="base"
    >
      <Heading as="h2" fontSize="3xl">
        Bem Vindo de volta !!
      </Heading>
      <VStack mt="7" spacing="4">
        {children}
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
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
        <Button
          isLoading={loading}
          borderRadius="8px"
          w="100%"
          h="60px"
          color="gray.300"
          _hover={{ bg: "gray.200" }}
          onClick={() => history.push("/register")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};

export default LoginForm;
