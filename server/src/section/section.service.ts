import { Injectable, NotFoundException } from '@nestjs/common';
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

  getSections(boardId: number) {
    return this.sectionRepository.find({ where: { board: { id: boardId } } });
  }

  async addSection(createSectionDto: CreateSectionDto) {
    const section = this.sectionRepository.create(createSectionDto);
    await this.sectionRepository.save(section);
  }

  async updateSection(id: number, updateSectionDto: UpdateSectionDto) {
    const result = await this.sectionRepository.update(id, updateSectionDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Section with id ${id} not found`);
    }
  }

  async deleteSection(id: number) {
    const result = await this.sectionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Section with id ${id} not found`);
    }
  }
}
