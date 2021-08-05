import { whiten } from "@chakra-ui/theme-tools";

export const InputStyle = {
  variants: {
    flushed: {
      field: {
        borderColor: "black",
        _focus: {
          borderColor: "blue.500",
          boxShadow: "none",
        },
        _valid: {
          borderColor: "500",
          boxShadow: "none",
        },
      },
    },
  },
};

export const ButtonStyle = {
  variants: {
    submitBtn: {
      bg: "green.500",
      color: "white",
      height: "40px",
      width: "150px",
      m: "20px auto 0",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      outline: "none",
      transition: "box-shadow 0.3s ease-in-out, background 0.3s ease",
      _hover: {
        bg: whiten("green.500", 20),
        boxShadow: "0px 0px 45px 17px rgba(56, 161, 105, 0.3)",
        _disabled: {
          bg: whiten("green.500", 20),
        },
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
};
