import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import logoMain from "../../assets/logo-main.svg";
import { FaForward } from "react-icons/fa";
import { theme } from "../../styles/theme";
import simpleImg from "../../assets/simplicidade.svg";

const RegisterInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} pl={["30px", "50px", "120px"]}>
      <Image
        boxSize={["120px", "120px", "180px", "180px"]}
        src={logoMain}
        alt="logo doit"
      ></Image>
      <VStack spacing="14">
        <Flex>
          <Center bg="white" h="50px" w="50px" borderRadius="5px">
            <FaForward color={theme.colors.purple["800"]} size={"25"} />
          </Center>
          <Box mt="4">
            <Heading size="lg">Agilidade</Heading>
            <Text>
              Agilize seus projetos com rapidez e <br /> muita performance
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Center bg="white" h="50px" w="50px" borderRadius="5px">
            <Image src={simpleImg} w="25px" />
          </Center>
          <Box mt="4">
            <Heading size="lg">Simplicidade</Heading>
            <Text>
              Armazene seus projetos em uma <br /> interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};

export default RegisterInfo;
