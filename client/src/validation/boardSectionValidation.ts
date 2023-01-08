import * as yup from "yup";

import { boardSectionRules } from "./rules";

export interface BoardSectionFormValues {
  title: string;
  description?: string;
}

export const boardSectionValidationSchema = yup.object({
  title: yup
    .string()
    .min(boardSectionRules.title.min)
    .max(boardSectionRules.title.max)
    .required(),
  description: yup
    .string()
    .min(boardSectionRules.description.min)
    .max(boardSectionRules.description.max)
    .optional(),
});
