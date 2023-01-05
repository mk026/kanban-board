import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthResponse } from './interfaces/auth-response.interface';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { Hash } from '../common/utils/hash.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signup(
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<AuthResponse> {
    const user = await this.userService.createUser(signupCredentialsDto);
    const accessToken = this.generateToken(user.id);
    return {
      user: { name: user.name, email: user.email },
      accessToken,
    };
  }

  async signin(
    signinCredentialsDto: SigninCredentialsDto,
  ): Promise<AuthResponse> {
    const { email, password } = signinCredentialsDto;
    const foundUser = await this.userService.getUserByEmail(email);
    if (!foundUser) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const isPasswordValid = Hash.compare(password, foundUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const accessToken = this.generateToken(foundUser.id);
    return {
      user: { name: foundUser.name, email: foundUser.email },
      accessToken,
    };
  }

  generateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }
}
