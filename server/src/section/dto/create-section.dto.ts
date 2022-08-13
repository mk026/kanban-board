import { IsNotEmpty } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly boardId: number;
}
