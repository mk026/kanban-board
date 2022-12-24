import { IsNotEmpty } from 'class-validator';

export class PaginationDto {
  @IsNotEmpty()
  readonly take: number;

  @IsNotEmpty()
  readonly skip: number;
}
