import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '../auth/get-user.decorator';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards(@GetUser() userId: number) {
    return this.boardService.getBoards(userId);
  }

  @Post()
  addBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.addBoard(createBoardDto);
  }

  @Put(':id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(id, updateBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.deleteBoard(id);
  }
}
