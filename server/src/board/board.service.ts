import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  getBoards(): string {
    return 'Boards...';
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
