import * as yup from "yup";

export interface BoardFormValues {
  title: string;
  description?: string;
}

export const boardValidationSchema = yup.object({
  title: yup.string().min(1).max(100).required(),
  description: yup.string().max(500).optional(),
});
