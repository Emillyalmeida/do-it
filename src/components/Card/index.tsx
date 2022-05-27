import {
  Box,
  Flex,
  Heading,
  HStack,
  Center,
  Text,
  Progress,
} from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { theme } from "../../styles/theme";

const Card = () => {
  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "tranlate(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s ease 0 transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="8"
      w={["300px", "auto"]}
    >
      <Flex justifyContent="space-between">
        <Heading>
          <HStack>
            <Center
              as="button"
              borderWidth="1px"
              borderColor="gray.300"
              borderRadius="5px"
              bgColor="white"
              w="30px"
              h="30px"
              _hover={{ bgColor: "purple.700" }}
            >
              <FaTrash color={theme.colors.gray["300"]} />
            </Center>
            <Center
              as="button"
              borderWidth="1px"
              borderColor="gray.300"
              borderRadius="5px"
              bgColor="white"
              w="30px"
              h="30px"
              _hover={{ bgColor: "purple.700" }}
            >
              <FaCheck color={theme.colors.gray["300"]} />
            </Center>
          </HStack>
        </Heading>
      </Flex>
      <Box ml="4" w="100%">
        <Text color="gray.400">test</Text>
        <Progress colorScheme="purple" mt="3" value={10} />
        <Text color="gray.300"></Text>
      </Box>
    </Box>
  );
};

export default Card;
