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

  getTasks(getTasksDto: GetTasksDto, userId: number) {
    return this.taskRepository.find({
      where: {
        board: { id: getTasksDto.boardId },
        section: { id: getTasksDto.sectionId },
        user: { id: userId },
      },
    });
  }

  async addTask(createTaskDto: CreateTaskDto, userId: number) {
    const task = this.taskRepository.create({
      title: createTaskDto.title,
      description: createTaskDto.description,
      board: { id: createTaskDto.boardId },
      section: { id: createTaskDto.sectionId },
      user: { id: userId },
      order: createTaskDto.order,
    });
    await this.taskRepository.save(task);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    const result = await this.taskRepository.update(
      { id, user: { id: userId } },
      updateTaskDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  async deleteTask(id: number, userId: number) {
    const result = await this.taskRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }
}
