import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }

  @Post()
  addUser(): string {
    return this.userService.addUser();
  }

  @Put()
  updateUser(): string {
    return this.userService.updateUser();
  }

  @Delete()
  deleteUser(): string {
    return this.userService.deleteUser();
  }
}
