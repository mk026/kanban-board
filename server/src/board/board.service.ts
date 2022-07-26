import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getBoards(): string {
    return 'Boards...';
  }
}
