import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsNotEmpty()
  @MaxLength(500)
  readonly description: string;

  @IsNotEmpty()
  readonly boardId: number;

  @IsNotEmpty()
  readonly sectionId: number;

  @IsNotEmpty()
  readonly userId: number;
}
