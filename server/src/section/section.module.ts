import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';

@Module({
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
