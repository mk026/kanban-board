import { IsNotEmpty } from 'class-validator';

export class CreateColumnDto {
  @IsNotEmpty()
  readonly title: string;
}
