export class UpdateTaskDto {
  public readonly id: number;
  public readonly sectionId?: number;
  public readonly title?: string;
  public readonly description?: string;
}