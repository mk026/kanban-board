import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(): string {
    return this.taskService.getTasks();
  }

  @Post()
  addTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.addTask(createTaskDto);
  }

  @Put()
  updateTask(@Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(updateTaskDto);
  }

  @Delete()
  deleteTask(): string {
    return this.taskService.deleteTask();
  }
}
