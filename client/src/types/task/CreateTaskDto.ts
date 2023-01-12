export interface CreateTaskDto {
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description?: string;
}
