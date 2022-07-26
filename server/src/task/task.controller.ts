import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getBoards(): string {
    return this.taskService.getTasks();
  }
}
