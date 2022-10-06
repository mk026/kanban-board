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
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('sections')
@UseGuards(AuthGuard())
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  getSections(@Query('boardId', ParseIntPipe) boardId: number) {
    return this.sectionService.getSections(boardId);
  }

  @Post()
  addSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.addSection(createSectionDto);
  }

  @Put(':id')
  updateSection(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.updateSection(id, updateSectionDto);
  }

  @Delete(':id')
  deleteSection(@Param('id', ParseIntPipe) id: number) {
    return this.sectionService.deleteSection(id);
  }
}
