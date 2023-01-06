import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(500)
  readonly description?: string;

  @IsInt()
  readonly order: number;

  @IsInt()
  readonly boardId: number;
}
