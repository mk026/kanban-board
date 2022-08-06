import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards() {
    return this.boardService.getBoards();
  }

  @Post()
  addBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.addBoard(createBoardDto);
  }

  @Put()
  updateBoard(@Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.updateBoard(updateBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): string {
    return this.boardService.deleteBoard(id);
  }
}
