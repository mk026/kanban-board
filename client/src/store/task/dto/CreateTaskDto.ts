export class CreateTaskDto {
  public readonly boardId: number;
  public readonly sectionId: number;
  public readonly title: string;
  public readonly description: string;
}