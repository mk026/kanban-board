import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto) {
    const user = await this.createUser(signupCredentialsDto);
    return { user };
  }

  async signin(signinCredentialsDto: SigninCredentialsDto) {
    const { email, password } = signinCredentialsDto;
    const foundUser = await this.userRepository.findOne({ where: { email } });
    if (!foundUser) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    const isPasswordValid = bcryptjs.compareSync(password, foundUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    return {
      user: { name: foundUser.name, email: foundUser.email },
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
  }
}
