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
import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";
import { theme } from "../../styles/theme";

interface CardProps {
  task: Task;
  key: string;
  onClick: (task: Task) => void;
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const Card = ({ task, onClick }: CardProps) => {
  const { user, accessToken } = UserAuth();
  const { deleteTask, updateTask } = useTasks();

  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translate(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s ease 0 transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="8"
      w={["300px", "auto"]}
    >
      <Flex justifyContent="space-between" mb="4">
        <Heading>{task.title}</Heading>
        <HStack>
          <Center
            as="button"
            cursor="pointer"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="5px"
            bgColor="white"
            w="30px"
            h="30px"
            _hover={{ bgColor: "purple.700" }}
            onClick={() => deleteTask(task.id, accessToken, user.id)}
          >
            <FaTrash color={theme.colors.gray["300"]} />
          </Center>
          <Center
            as="button"
            cursor="pointer"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="5px"
            bgColor="white"
            w="30px"
            h="30px"
            _hover={{ bgColor: "purple.700" }}
            onClick={() => updateTask(user.id, accessToken, task.id)}
          >
            <FaCheck color={theme.colors.gray["300"]} />
          </Center>
        </HStack>
      </Flex>
      <Box ml="4" w="100%" onClick={() => onClick(task)}>
        <Text color="gray.400">{task.description}</Text>
        <Progress
          colorScheme="purple"
          mt="3"
          value={task.completed ? 100 : 10}
        />
        <Text color="gray.300" mt="3">
          {" "}
          data{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
