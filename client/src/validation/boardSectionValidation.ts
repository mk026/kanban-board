import * as yup from "yup";

import { boardSectionRules } from "./rules";

export interface BoardSectionFormValues {
  title: string;
}

export const boardSectionValidationSchema = yup.object({
  title: yup
    .string()
    .min(boardSectionRules.title.min)
    .max(boardSectionRules.title.max)
    .required(),
});
