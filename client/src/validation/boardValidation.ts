import * as yup from "yup";

import { boardRules } from "./rules";

export interface BoardFormValues
  extends yup.InferType<typeof boardValidationSchema> {}

export const boardValidationSchema = yup.object({
  title: yup
    .string()
    .min(boardRules.title.min)
    .max(boardRules.title.max)
    .required(),
  description: yup.string().max(boardRules.description.max).optional(),
});
