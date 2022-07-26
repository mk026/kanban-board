import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks(): string {
    return 'Tasks...';
  }

  addTask(): string {
    return 'Adding new task...';
  }

  updateTask(): string {
    return 'Updating task...';
  }

  deleteTask(): string {
    return 'Deleting task...';
  }
}
