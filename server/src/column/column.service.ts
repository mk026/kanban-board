import { Injectable } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Injectable()
export class ColumnService {
  getColumns(): string {
    return 'Columns...';
  }

  addColumn(createColumnDto: CreateColumnDto) {
    return createColumnDto;
  }

  updateColumn(updateColumnDto: UpdateColumnDto) {
    return updateColumnDto;
  }

  deleteColumn(): string {
    return 'Deleting column...';
  }
}
