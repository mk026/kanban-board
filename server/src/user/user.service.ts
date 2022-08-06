import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  getOne(id: string): string {
    return 'User with id ' + id;
  }

  addUser(): string {
    return 'Adding new user...';
  }

  updateUser(): string {
    return 'Updating user...';
  }

  deleteUser(id: number): string {
    return `Deleting user with id ${id}...`;
  }
}
