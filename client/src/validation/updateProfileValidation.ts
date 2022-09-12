import * as yup from "yup";

export interface UpdateProfileFormValues {
  name: string;
  email: string;
}

export const updateProfileValidationSchema = yup.object({
  name: yup.string().min(1).max(100).required(),
  email: yup.string().email().required(),
});
