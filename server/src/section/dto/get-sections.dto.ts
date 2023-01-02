import { IsInt } from 'class-validator';

export class GetSectionsDto {
  @IsInt()
  readonly boardId: number;
}
