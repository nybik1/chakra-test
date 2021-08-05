import React, { useState } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
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
            isInvalid={!!formik.errors.oldPass}
            name="oldPass"
            onChange={formik.handleChange}
            value={formik.values.oldPass}
            type="password"
            variant="flushed"
          />
        </FormControl>
        <FormControl>
          <FormLabel>New password</FormLabel>
          <Input
            isInvalid={!!formik.errors.newPass || !!formik.errors.confirmPass}
            name="newPass"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            type="password"
            variant="flushed"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm new password</FormLabel>
          <Input
            isInvalid={!!formik.errors.confirmPass}
            name="confirmPass"
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
            type="password"
            variant="flushed"
          />
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
