import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards(): string {
    return this.boardService.getBoards();
  }
}
