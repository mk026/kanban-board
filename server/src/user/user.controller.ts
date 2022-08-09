import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Put()
  updateUser(): string {
    return this.userService.updateUser();
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): string {
    return this.userService.deleteUser(id);
  }
}
