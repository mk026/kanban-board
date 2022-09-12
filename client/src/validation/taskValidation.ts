import * as yup from "yup";

export interface TaskFormValues {
  title: string;
  description: string;
}

export const taskValidationSchema = yup.object({
  title: yup.string().min(1).max(50).required(),
  description: yup.string().min(1).max(500).required(),
});
