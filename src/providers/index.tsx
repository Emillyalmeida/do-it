import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AuthProvider } from "./userAuth";
import { TasksProvider } from "./tasks";

interface AppProviderProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProp) => (
  <AuthProvider>
    <TasksProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </TasksProvider>
  </AuthProvider>
);
