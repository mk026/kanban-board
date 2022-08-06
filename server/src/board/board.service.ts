import { Injectable } from '@nestjs/common';
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

  addBoard(createBoardDto: CreateBoardDto) {
    return createBoardDto;
  }

  updateBoard(updateBoardDto: UpdateBoardDto) {
    return updateBoardDto;
  }

  deleteBoard(id: string): string {
    return `Deleting board with id ${id}...`;
  }
}
