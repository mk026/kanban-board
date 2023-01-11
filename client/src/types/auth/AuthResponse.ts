import { UserResponse } from "../user/UserResponse";

export interface AuthResponse {
  user: UserResponse;
  token: string;
}
