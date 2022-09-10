import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class SignupCredentialsDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  readonly password: string;
}
