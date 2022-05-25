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

import { useState, useEffect, useCallback, useRef } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

const Input = ({
  name,
  label,
  error = null,
  icon: Icon,
  ...rest
}: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel> {label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mt="0.8rem">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          h="60px"
          size="lg"
          bg="gray.50"
          variant="outline"
          _hover={{ bg: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export default Input;
