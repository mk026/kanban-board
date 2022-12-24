import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('sections')
@UseGuards(AuthGuard())
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  getSections(
    @AuthUser() userId: number,
    @Query('boardId', ParseIntPipe) boardId: number,
  ) {
    return this.sectionService.getSections(boardId);
  }

  @Post()
  addSection(
    @AuthUser() userId: number,
    @Body() createSectionDto: CreateSectionDto,
  ) {
    return this.sectionService.addSection(createSectionDto);
  }

  @Put(':id')
  updateSection(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.updateSection(id, updateSectionDto);
  }

  @Delete(':id')
  deleteSection(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.sectionService.deleteSection(id);
  }
}
