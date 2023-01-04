import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  readonly title: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(1000)
  readonly description?: string;
}
