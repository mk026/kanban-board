import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly boardId: number;

  @IsNotEmpty()
  readonly sectionId: number;

  @IsNotEmpty()
  readonly userId: number;
}
