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
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '../auth/get-user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(
    @GetUser() userId: number,
    @Query('boardId', ParseIntPipe) boardId: number,
  ) {
    return this.taskService.getTasks(boardId);
  }

  @Post()
  addTask(@GetUser() userId: number, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.addTask(createTaskDto);
  }

  @Put(':id')
  updateTask(
    @GetUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@GetUser() userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
