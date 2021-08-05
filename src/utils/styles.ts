import { whiten } from "@chakra-ui/theme-tools";

export const InputStyle = {
  variants: {
    field: {
      defaultInput: {
        outline: "none",
        p: "5px",
        borderColor: "gray.100",
        _hover: { borderColor: "gray.700" },
        _focus: { borderColor: "gray.700" },
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
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
};
