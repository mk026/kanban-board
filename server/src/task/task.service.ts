import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksDto } from './dto/get-tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  getTasks(userId: number, getTasksDto: GetTasksDto) {
    return this.taskRepository.find({
      where: {
        board: { id: getTasksDto.boardId },
        user: { id: userId },
      },
    });
  }

  async addTask(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    await this.taskRepository.save(task);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const result = await this.taskRepository.update(id, updateTaskDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  async deleteTask(id: number) {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }
}
