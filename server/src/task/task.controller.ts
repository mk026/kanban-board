import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(
    @AuthUser() userId: number,
    @Query('boardId', ParseIntPipe) boardId: number,
  ) {
    return this.taskService.getTasks(boardId);
  }

  @Post()
  addTask(@AuthUser() userId: number, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.addTask(createTaskDto);
  }

  @Put(':id')
  updateTask(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.taskService.deleteTask(id);
  }
}
