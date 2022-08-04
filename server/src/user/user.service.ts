import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'Users...';
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

  deleteUser(id: string): string {
    return `Deleting user with id ${id}...`;
  }
}
