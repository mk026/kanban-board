import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  signup(signupCredentialsDto: SignupCredentialsDto) {
    return signupCredentialsDto;
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return signinCredentialsDto;
  }
}
