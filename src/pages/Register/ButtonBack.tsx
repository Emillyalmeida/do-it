import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

interface ButtonProps {
  top: string;
  left: string;
}

const ButtonBack = ({ top, left }: ButtonProps) => {
  const history = useHistory();
  return (
    <Center
      as="button"
      position="absolute"
      bgColor="purple.500"
      _hover={{ bgColor: "purple.700" }}
      top={top}
      left={left}
      fontSize="2xl"
      borderRadius="5px"
      w={["60px", "80px"]}
      h={["60px", "70px"]}
      onClick={() => history.push("/")}
    >
      <FaArrowLeft />
    </Center>
  );
};

export default ButtonBack;
