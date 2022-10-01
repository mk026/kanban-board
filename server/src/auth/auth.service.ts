import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

import { User } from '../user/user.entity';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthResponse } from './auth-response.interface';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<AuthResponse> {
    const user = await this.createUser(signupCredentialsDto);
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
    const foundUser = await this.userRepository.findOne({ where: { email } });
    if (!foundUser) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const isPasswordValid = bcryptjs.compareSync(password, foundUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const accessToken = this.generateToken(foundUser.id);
    return {
      user: { name: foundUser.name, email: foundUser.email },
      accessToken,
    };
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const foundUser = this.userRepository.findOne({
      where: { email: signupCredentialsDto.email },
    });
    if (foundUser) {
      throw new ConflictException('Email already in use');
    }
    const passwordHash = bcryptjs.hashSync(signupCredentialsDto.password);
    const user = this.userRepository.create({
      ...signupCredentialsDto,
      password: passwordHash,
    });
    await this.userRepository.save(user);
    return user;
  }

  generateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }
}
