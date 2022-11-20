import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { AuthService } from '../auth/auth.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    const found = await this.userRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return found;
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const foundUser = this.getUserByEmail(signupCredentialsDto.email);
    if (foundUser) {
      throw new ConflictException('Email already in use');
    }
    const user = this.userRepository.create(signupCredentialsDto);
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const { oldPassword, newPassword } = updatePasswordDto;
    const isPasswordValid = this.authService.verifyPassword(
      oldPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect credentials');
    }
    const newPasswordHash = this.authService.hashPassword(newPassword);
    user.password = newPasswordHash;
    await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
