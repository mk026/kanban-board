import * as yup from "yup";

export const signinValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
