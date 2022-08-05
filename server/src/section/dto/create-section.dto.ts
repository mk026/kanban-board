import { IsNotEmpty } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  readonly title: string;
}
