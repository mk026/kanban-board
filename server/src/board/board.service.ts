import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { GetBoardsDto } from './dto/get-boards.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  getBoards(getBoardsDto: GetBoardsDto, userId: number) {
    return this.boardRepository.find({
      where: { user: { id: userId } },
      skip: getBoardsDto.skip,
      take: getBoardsDto.take,
    });
  }

  getBoard(id: number, userId: number) {
    return this.boardRepository.find({
      where: { id, user: { id: userId } },
      relations: { sections: true, tasks: true },
    });
  }

  async addBoard(createBoardDto: CreateBoardDto, userId: number) {
    const board = this.boardRepository.create({
      title: createBoardDto.title,
      user: { id: userId },
    });
    await this.boardRepository.save(board);
  }

  async updateBoard(
    id: number,
    updateBoardDto: UpdateBoardDto,
    userId: number,
  ) {
    const result = await this.boardRepository.update(
      { id, user: { id: userId } },
      updateBoardDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }

  async deleteBoard(id: number, userId: number) {
    const result = await this.boardRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }
}
