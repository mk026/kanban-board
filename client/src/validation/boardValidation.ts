import * as yup from "yup";

import { boardRules } from "./rules";

export interface BoardFormValues {
  title: string;
  description: string;
}

export const boardValidationSchema = yup.object({
  title: yup
    .string()
    .min(boardRules.title.min)
    .max(boardRules.title.max)
    .required(),
  description: yup.string().max(boardRules.description.max).optional(),
});
