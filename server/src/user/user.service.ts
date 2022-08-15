import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupCredentialsDto } from 'src/auth/dto/signup-credentials.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async getUser(id: number) {
    const found = await this.userRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return found;
  }

  addUser(signupCredentialsDto: SignupCredentialsDto) {
    return signupCredentialsDto;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  deleteUser(id: number): string {
    return `Deleting user with id ${id}...`;
  }
}
