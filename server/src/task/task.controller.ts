import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Post()
  addTask(): string {
    return this.taskService.addTask();
  }

  @Put()
  updateTask(): string {
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask(): string {
    return this.taskService.deleteTask();
  }
}
