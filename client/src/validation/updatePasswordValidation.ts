import * as yup from "yup";

export interface UpdatePasswordFormValues {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export const updatePasswordValidationSchema = yup.object({
  oldPassword: yup.string().required(),
  password: yup.string().min(8).max(100).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
