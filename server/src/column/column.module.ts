import { Module } from '@nestjs/common';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';

@Module({
  controllers: [ColumnController],
  providers: [ColumnService],
})
export class ColumnModule {}
