import * as yup from "yup";

import { taskRules } from "./rules";

export interface TaskFormValues
  extends yup.InferType<typeof taskValidationSchema> {}

export const taskValidationSchema = yup.object({
  title: yup
    .string()
    .min(taskRules.title.min)
    .max(taskRules.title.max)
    .required(),
  description: yup
    .string()
    .min(taskRules.description.min)
    .max(taskRules.description.max)
    .optional(),
});
