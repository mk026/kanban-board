import * as yup from "yup";

import { userRules } from "./rules";

export interface UpdatePasswordFormValues
  extends yup.InferType<typeof updatePasswordValidationSchema> {}

export const updatePasswordValidationSchema = yup.object({
  oldPassword: yup.string().required(),
  password: yup
    .string()
    .min(userRules.password.min)
    .max(userRules.password.max)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
