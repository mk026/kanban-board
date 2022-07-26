import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getBoards(): string {
    return 'Boards...';
  }

  addBoard(): string {
    return 'Adding new board...';
  }

  updateBoard(): string {
    return 'Updating board...';
  }

  deleteBoard(): string {
    return 'Deleting board...';
  }
}
