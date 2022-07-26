import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards(): string {
    return this.boardService.getBoards();
  }

  @Post()
  addBoard(): string {
    return this.boardService.addBoard();
  }

  @Put()
  updateBoard(): string {
    return this.boardService.updateBoard();
  }

  @Delete()
  deleteBoard(): string {
    return this.boardService.deleteBoard();
  }
}
