import React, { useState } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { validationSchema } from "../../utils/validationScheme";

const Form: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      oldPass: "",
      newPass: "",
      confirmPass: "",
    },
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        formik.resetForm();
        toast({
          title: "Password is changed",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 1000);
    },
    validationSchema: validationSchema,
  });

  return (
    <form style={{ minWidth: "320px" }} onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Your old password</FormLabel>
          <Input
            name="oldPass"
            onChange={formik.handleChange}
            value={formik.values.oldPass}
            type="password"
            p="5px"
            borderColor={
              formik.errors.oldPass || formik.errors.newPass
                ? "red.500"
                : "gray.100"
            }
            _hover={{ borderColor: "gray.700" }}
            _focus={{ borderColor: "gray.700" }}
          />
          {formik.errors.oldPass && (
            <FormHelperText color="red.500">
              {formik.errors.oldPass}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>New password</FormLabel>
          <Input
            name="newPass"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            type="password"
            p="5px"
            borderColor={
              formik.errors.confirmPass || formik.errors.newPass
                ? "red.500"
                : "gray.100"
            }
            _hover={{ borderColor: "gray.700" }}
            _focus={{ borderColor: "gray.700" }}
          />
          {formik.errors.newPass && (
            <FormHelperText color="red.500">
              {formik.errors.newPass}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Confirm new password</FormLabel>
          <Input
            name="confirmPass"
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
            type="password"
            p="5px"
            borderColor={formik.errors.confirmPass ? "red.500" : "gray.100"}
            _hover={{ borderColor: "gray.700" }}
            _focus={{ borderColor: "gray.700" }}
          />
          {formik.errors.confirmPass && (
            <FormHelperText color="red.500">
              Passwords must match!
            </FormHelperText>
          )}
        </FormControl>
        <Button
          isLoading={isLoading}
          variant="submitBtn"
          type="submit"
          disabled={!formik.isValid}
        >
          Save changes
        </Button>
      </VStack>
    </form>
  );
};

export default Form;
