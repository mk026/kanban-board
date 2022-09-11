import * as yup from "yup";

export interface BoardSectionFormValues {
  title: string;
}

export const boardSectionValidationSchema = yup.object({
  title: yup.string().min(1).max(100).required(),
});
