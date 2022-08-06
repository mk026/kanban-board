import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {}

  getSections() {
    return this.sectionRepository.find();
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
