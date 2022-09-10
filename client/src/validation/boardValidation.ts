import * as yup from "yup";

export interface BoardFormValues {
  title: string;
  description?: string;
}

export const boardValidationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().optional(),
});
