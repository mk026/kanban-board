import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  @MaxLength(500)
  readonly description?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly order: number;

  @IsNotEmpty()
  readonly boardId: number;

  @IsNotEmpty()
  readonly sectionId: number;
}
