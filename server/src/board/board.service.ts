import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  getBoards() {
    return this.boardRepository.find();
  }

  async addBoard(createBoardDto: CreateBoardDto) {
    const board = this.boardRepository.create(createBoardDto);
    await this.boardRepository.save(board);
  }

  async updateBoard(id: number, updateBoardDto: UpdateBoardDto) {
    const result = await this.boardRepository.update(id, updateBoardDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }

  async deleteBoard(id: number) {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }
}
