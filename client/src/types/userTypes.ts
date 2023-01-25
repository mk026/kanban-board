export interface UserResponse {
  id: number;
  name: string;
  bio?: string;
  email: string;
}

export interface UpdateUserDto {
  name?: string;
  bio?: string;
  email?: string;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
