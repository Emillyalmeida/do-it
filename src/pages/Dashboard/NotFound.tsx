import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";

interface NotFoundProps {
  taskNotFound: string;
}

const NotFound = ({ taskNotFound }: NotFoundProps) => {
  return (
    <Center mt="12" display="flex" flexDir="column" textAlign="center">
      <Heading size="xl">Não encontramos resultados para:</Heading>
      <Text fontWeight="bold" color="gray.300" fontSize="2xl" pt="2">
        {taskNotFound}
      </Text>
      <Box
        mt="6"
        p="8"
        bg="white"
        boxShadow="base"
        w={["80%", "70%", "40%"]}
        maxW="500px"
      >
        <Stack>
          <Skeleton
            startColor="gray.100"
            endColor="gray.200"
            h="20px"
            borderRadius="20px"
            w="75%"
          />
          <Skeleton
            startColor="gray.100"
            endColor="gray.200"
            h="20px"
            borderRadius="20px"
            w="60%"
          />
        </Stack>
        <Stack pt="5">
          <Skeleton
            startColor="gray.100"
            endColor="gray.200"
            h="14px"
            borderRadius="14px"
          />
          <Skeleton
            startColor="gray.100"
            endColor="gray.200"
            h="14px"
            borderRadius="14px"
          />
        </Stack>
      </Box>
    </Center>
  );
};

export default NotFound;
