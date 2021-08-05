import * as React from "react";
import {
  ChakraProvider,
  Container,
  Flex,
  Heading,
  CSSReset,
} from "@chakra-ui/react";
import Form from "./components/Form/Form";
import { myTheme } from "./utils/theme";

export const App = () => (
  <ChakraProvider theme={myTheme}>
    <CSSReset />
    <Container maxW="lg" height="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        height="100%"
      >
        <Heading as="h1" mb="50px">
          Create your new password
        </Heading>
        <Form />
      </Flex>
    </Container>
  </ChakraProvider>
);
