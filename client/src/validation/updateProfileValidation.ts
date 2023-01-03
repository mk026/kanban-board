import * as yup from "yup";

import { userRules } from "./rules";

export interface UpdateProfileFormValues {
  name: string;
  bio: string;
  email: string;
}

export const updateProfileValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).required(),
  bio: yup.string().min(userRules.bio.min).max(userRules.bio.max).required(),
  email: yup.string().email().required(),
});
