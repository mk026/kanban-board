import { Injectable } from '@nestjs/common';

@Injectable()
export class ColumnService {
  getColumns(): string {
    return 'Columns...';
  }

  addColumn(): string {
    return 'Adding new column...';
  }

  updateColumn(): string {
    return 'Updating column...';
  }

  deleteColumn(): string {
    return 'Deleting column...';
  }
}
