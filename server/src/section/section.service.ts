import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionService {
  getSections(): string {
    return 'Sections...';
  }

  addSection(createSectionDto: CreateSectionDto) {
    return createSectionDto;
  }

  updateSection(updateSectionDto: UpdateSectionDto) {
    return updateSectionDto;
  }

  deleteSection(id: string): string {
    return `Deleting section with id ${id}...`;
  }
}
