import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | undefined;
  icon?: IconType;
}

type VariationOption = {
  [key: string]: string;
};

const variations: VariationOption = {
  erro: "red.500",
  ok: "green.500",
  default: "gray.200",
  focus: "purple.800",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = undefined, icon: Icon, ...rest },
  ref
) => {
  const [variation, setvariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setvariation("erro");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setvariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (!!value) {
      return setvariation("ok");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel> {label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={variations[variation]} mt="0.8rem">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          ref={ref}
          name={name}
          h="60px"
          size="lg"
          bg="gray.50"
          color={variations[variation]}
          borderColor={variations[variation]}
          variant="outline"
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          _focus={{ bg: "gray.100" }}
          _hover={{ bg: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
