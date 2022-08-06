import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  getTasks() {
    return this.taskRepository.find();
  }

  addTask(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  updateTask(updateTaskDto: UpdateTaskDto) {
    return updateTaskDto;
  }

  deleteTask(id: string): string {
    return `Deleting task with id ${id}...`;
  }
}
