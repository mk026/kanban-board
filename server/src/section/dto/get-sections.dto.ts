import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class GetSectionsDto {
  @IsInt()
  @Type(() => Number)
  readonly boardId: number;
}
