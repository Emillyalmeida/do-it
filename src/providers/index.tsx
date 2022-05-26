import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AuthProvider } from "./userAuth";

interface AppProviderProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProp) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
