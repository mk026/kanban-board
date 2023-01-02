import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class GetTasksDto {
  @IsInt()
  @Type(() => Number)
  readonly boardId: number;
}
