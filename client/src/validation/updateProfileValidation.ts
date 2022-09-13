import * as yup from "yup";

import { userRules } from "./rules";

export interface UpdateProfileFormValues {
  name: string;
  email: string;
}

export const updateProfileValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).required(),
  email: yup.string().email().required(),
});
