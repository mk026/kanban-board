import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  readonly order: number;

  @IsNotEmpty()
  readonly boardId: number;

  @IsNotEmpty()
  readonly userId: number;
}
