import * as yup from "yup";

import { userRules } from "./rules";

export interface UpdateProfileFormValues
  extends yup.InferType<typeof updateProfileValidationSchema> {}

export const updateProfileValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).optional(),
  bio: yup.string().min(userRules.bio.min).max(userRules.bio.max).optional(),
  email: yup.string().email().optional(),
});
