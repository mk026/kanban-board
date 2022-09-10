import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsNotEmpty()
  readonly boardId: number;

  @IsNotEmpty()
  readonly userId: number;
}
