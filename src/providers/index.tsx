import { theme } from "../styles/theme";
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from "react";

interface AppProviderProp {
    children: ReactNode;
}

export const AppProvider = ({children}:AppProviderProp)=>(
    <ChakraProvider theme={theme}>
       {children}
    </ChakraProvider>
)