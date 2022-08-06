import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  getSections() {
    return this.sectionService.getSections();
  }

  @Post()
  addSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.addSection(createSectionDto);
  }

  @Put()
  updateSection(@Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionService.updateSection(updateSectionDto);
  }

  @Delete(':id')
  deleteSection(@Param('id') id: string): string {
    return this.sectionService.deleteSection(id);
  }
}
