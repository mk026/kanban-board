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

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
@UseGuards(JwtAuthGuard)
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards(@AuthUser() userId: number) {
    return this.boardService.getBoards(userId);
  }

  @Get(':id')
  getBoard(@AuthUser() userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.boardService.getBoard(id, userId);
  }

  @Post()
  addBoard(@AuthUser() userId: number, @Body() createBoardDto: CreateBoardDto) {
    return this.boardService.addBoard(createBoardDto, userId);
  }

  @Put(':id')
  updateBoard(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(id, updateBoardDto, userId);
  }

  @Delete(':id')
  deleteBoard(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.boardService.deleteBoard(id, userId);
  }
}
