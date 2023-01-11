export interface UpdateTaskDto {
  id: number;
  sectionId?: number;
  order?: number;
  title?: string;
  description?: string;
}
