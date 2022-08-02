import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  getTasks(): string {
    return 'Tasks...';
  }

  addTask(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  updateTask(updateTaskDto: UpdateTaskDto) {
    return updateTaskDto;
  }

  deleteTask(): string {
    return 'Deleting task...';
  }
}
