import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSectionDto } from './dto/create-section.dto';
import { GetSectionsDto } from './dto/get-sections.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {}

  getSections(getSectionsDto: GetSectionsDto, userId: number) {
    return this.sectionRepository.find({
      where: {
        user: { id: userId },
        board: { id: getSectionsDto.boardId },
      },
    });
  }

  async addSection(createSectionDto: CreateSectionDto, userId: number) {
    const section = this.sectionRepository.create({
      title: createSectionDto.title,
      order: createSectionDto.order,
      board: { id: createSectionDto.boardId },
      user: { id: userId },
    });
    await this.sectionRepository.save(section);
  }

  async updateSection(
    id: number,
    updateSectionDto: UpdateSectionDto,
    userId: number,
  ) {
    const result = await this.sectionRepository.update(
      { id, user: { id: userId } },
      updateSectionDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Section with id ${id} not found`);
    }
  }

  async deleteSection(id: number, userId: number) {
    const result = await this.sectionRepository.delete({
      id,
      user: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Section with id ${id} not found`);
    }
  }
}
