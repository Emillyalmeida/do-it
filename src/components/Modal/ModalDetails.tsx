import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
  Heading,
  HStack,
  Progress,
} from "@chakra-ui/react";
import { FaCheck, FaCube, FaTrash } from "react-icons/fa";

import { useTasks } from "../../providers/tasks";
import { UserAuth } from "../../providers/userAuth";
import { theme } from "../../styles/theme";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ModalDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

const ModalDetails = ({ isOpen, onClose, task }: ModalDetailsProps) => {
  const { user, accessToken } = UserAuth();
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id, accessToken, user.id);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="gray.800">
        <ModalHeader display="flex" justifyContent="space-between">
          <Heading display="flex" alignItems="center">
            <Center
              bg="purple.500"
              color="white"
              w="30px"
              h="30px"
              mr="2"
              fontSize="1.1rem"
              borderRadius="5px"
            >
              <FaCube />
            </Center>
            Visualizar
          </Heading>
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
              onClick={() => handleDelete()}
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
            <ModalCloseButton
              position="inherit"
              fontWeight="bold"
              bg="red.500"
              color="white"
              _hover={{ bg: "red.600" }}
            />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" fontSize="2xl">
            {task.title}
          </Heading>
          <Text color="gray.400" pt="4">
            {" "}
            {task.description}
          </Text>
        </ModalBody>

        <Box display="flex" flexDirection="column" paddingX="6" pb="6">
          <Progress
            colorScheme="purple"
            mt="3"
            value={task.completed ? 100 : 10}
          />
          <Text color="gray.300" mt="2">
            {" "}
            data{" "}
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetails;
