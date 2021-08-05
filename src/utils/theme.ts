import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button, InputStyle as Input } from "./styles";

const myTheme = extendTheme({
  components: {
    Button,
    Input,
  },
});

export { myTheme };
