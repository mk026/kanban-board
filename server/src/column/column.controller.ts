import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Get()
  getColumns(): string {
    return this.columnService.getColumns();
  }

  @Post()
  addColumn(@Body() createColumnDto: CreateColumnDto) {
    return this.columnService.addColumn(createColumnDto);
  }

  @Put()
  updateColumn(@Body() updateColumnDto: UpdateColumnDto) {
    return this.columnService.updateColumn(updateColumnDto);
  }

  @Delete()
  deleteColumn(): string {
    return this.columnService.deleteColumn();
  }
}
