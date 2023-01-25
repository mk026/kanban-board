export interface TaskResponse {
  id: number;
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description?: string;
}

export interface CreateTaskDto {
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description?: string;
}

export interface UpdateTaskDto {
  sectionId?: number;
  order?: number;
  title?: string;
  description?: string;
}
