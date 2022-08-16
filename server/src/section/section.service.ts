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

  async addSection(createSectionDto: CreateSectionDto) {
    const section = this.sectionRepository.create(createSectionDto);
    await this.sectionRepository.save(section);
  }

  updateSection(updateSectionDto: UpdateSectionDto) {
    return updateSectionDto;
  }

  deleteSection(id: number): string {
    return `Deleting section with id ${id}...`;
  }
}
