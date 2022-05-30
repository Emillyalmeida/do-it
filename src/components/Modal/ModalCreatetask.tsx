import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Center,
  Box,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaClipboard } from "react-icons/fa";
import { Input } from "../Form";
import { Textarea } from "../Form/TextArea";
import { UserAuth } from "../../providers/userAuth";
import { useTasks } from "../../providers/tasks";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TaskData {
  title: string;
  description: string;
}

const ModalCreateTask = ({ isOpen, onClose }: ModalSuccessProps) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    description: yup
      .string()
      .required("Campo Obrigatório")
      .max(100, "Maximo de 100 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskData>({ resolver: yupResolver(schema) });

  const { user, accessToken } = UserAuth();
  const { createTask } = useTasks();

  const postTask = (data: TaskData) => {
    const newData = { ...data, completed: false, userId: user.id };

    createTask(newData, accessToken).then((_) => onClose());
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(postTask)}
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Center bg="purple.500" color="white" w="30px" h="30px">
            <FaClipboard />
          </Center>
          <Text ml="2" fontWeight="bold">
            Adicionar
          </Text>
        </ModalHeader>
        <ModalCloseButton
          fontWeight="bold"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        />
        <ModalBody as="form">
          <VStack spacing="5" mt="5">
            <Input
              label="Title"
              placeholder="Digite seu título"
              {...register("title")}
              error={errors.title}
            />
            <Textarea
              label="Descrição"
              placeholder="Digite sua descrição"
              {...register("description")}
              error={errors.description}
            />
          </VStack>
        </ModalBody>

        <ModalFooter display="flex" flexDirection="column">
          <Button
            w="100%"
            bg="purple.500"
            h="60px"
            color="white"
            _hover={{ bg: "purple.600" }}
            type="submit"
          ></Button>
          <Text textAlign="center" mt="4" pb="4">
            Adicionar Tarefa
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateTask;
