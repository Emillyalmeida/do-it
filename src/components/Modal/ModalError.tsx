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

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalError = ({ isOpen, onClose }: ModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="gray.800">
        <ModalHeader display="flex">
          <Center bg="red.500" color="white" w="30px" h="30px">
            <FaExclamation />
          </Center>
          <Text ml="2" fontWeight="bold">
            Oops!
          </Text>
        </ModalHeader>
        <ModalCloseButton
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        />
        <ModalBody>
          <Text> Ocorreu algum erro!</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            bg="red.500"
            h="60px"
            color="white"
            _hover={{ bg: "red.600" }}
            onClick={onClose}
          >
            Tentar novamente
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
