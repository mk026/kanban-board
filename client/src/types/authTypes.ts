import { UserResponse } from "./userTypes";

export interface AuthResponse {
  user: UserResponse;
  token: string;
}
