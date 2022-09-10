import * as yup from "yup";

export interface TaskFormValues {
  title: string;
  description: string;
}

export const taskValidationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});
