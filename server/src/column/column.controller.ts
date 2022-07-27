import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ColumnService } from './column.service';

@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Get()
  getColumns(): string {
    return this.columnService.getColumns();
  }

  @Post()
  addColumn(): string {
    return this.columnService.addColumn();
  }

  @Put()
  updateColumn(): string {
    return this.columnService.updateColumn();
  }

  @Delete()
  deleteColumn(): string {
    return this.columnService.deleteColumn();
  }
}
