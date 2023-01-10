import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetTasksDto {
  @IsInt()
  @Type(() => Number)
  readonly boardId: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly sectionId?: number;
}
