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
} from "@chakra-ui/react";

import { FaExclamation } from "react-icons/fa";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  secundaryMessage: string;
  buttonMessage: string;
  onClick: () => void;
}

const ModalSuccess = ({
  isOpen,
  onClose,
  message,
  secundaryMessage,
  buttonMessage,
  onClick,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="gray.800">
        <ModalHeader display="flex">
          <Center
            bg="purple.500"
            color="white"
            w="30px"
            h="30px"
            borderRadius="5px"
          >
            <FaExclamation />
          </Center>
          <Text ml="2" fontWeight="bold">
            Yeess..
          </Text>
        </ModalHeader>
        <ModalCloseButton
          fontWeight="bold"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        />
        <ModalBody>
          <Text color="gray.400">
            <Box
              textAlign="center"
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Text>
        </ModalBody>

        <ModalFooter display="flex" flexDirection="column">
          <Button
            w="100%"
            bg="purple.500"
            h="60px"
            color="white"
            _hover={{ bg: "purple.600" }}
            onClick={onClick}
          >
            {buttonMessage}
          </Button>
          <Text textAlign="center" mt="4" pb="4" color="gray.400">
            <Box
              dangerouslySetInnerHTML={{
                __html: secundaryMessage,
              }}
            />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
