import * as yup from "yup";

import { taskRules } from "./rules";

export interface TaskFormValues {
  title: string;
  description: string;
}

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
    .required(),
});
