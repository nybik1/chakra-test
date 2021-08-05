import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  oldPass: Yup.string().required("Write your old password please"),
  newPass: Yup.string().required("New password is required"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("newPass"), null], "Passwords must match")
    .required(),
});
