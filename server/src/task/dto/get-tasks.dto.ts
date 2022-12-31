import { IsNotEmpty } from 'class-validator';

export class GetTasksDto {
  @IsNotEmpty()
  readonly boardId: number;
}
