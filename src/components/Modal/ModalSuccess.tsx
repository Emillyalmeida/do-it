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
} from "@chakra-ui/react";

import { FaExclamation } from "react-icons/fa";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSuccess = ({ isOpen, onClose }: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="gray.800">
        <ModalHeader display="flex">
          <Center bg="purple.500" color="white" w="30px" h="30px">
            <FaExclamation />
          </Center>
          <Text ml="2" fontWeight="bold">
            Yeess..
          </Text>
        </ModalHeader>
        <ModalCloseButton
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        />
        <ModalBody>
          <Text>Seu cadastro deu super certo, vamos lá</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            bg="purple.500"
            h="60px"
            color="white"
            _hover={{ bg: "purple.600" }}
            onClick={onClose}
          >
            Ir para o login agora
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
