import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'Users...';
  }

  addUser(): string {
    return 'Adding new user...';
  }

  updateUser(): string {
    return 'Updating user...';
  }

  deleteUser(): string {
    return 'Deleting user...';
  }
}
