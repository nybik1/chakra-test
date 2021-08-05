import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./styles";

const myTheme = extendTheme({
  components: {
    Button,
  },
});

export { myTheme };
