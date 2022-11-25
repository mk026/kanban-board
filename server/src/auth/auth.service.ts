import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthResponse } from './auth-response.interface';
import { JwtPayload } from './jwt-payload.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async signup(
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<AuthResponse> {
    const passwordHash = this.hashPassword(signupCredentialsDto.password);
    const user = await this.userService.createUser({
      ...signupCredentialsDto,
      password: passwordHash,
    });
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
    const isPasswordValid = this.verifyPassword(password, foundUser.password);
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

  hashPassword(password: string) {
    return bcryptjs.hashSync(password);
  }

  verifyPassword(password: string, hash: string) {
    return bcryptjs.compareSync(password, hash);
  }
}
