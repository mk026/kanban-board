export interface BoardSectionResponse {
  id: number;
  boardId: number;
  order: number;
  title: string;
  description?: string;
}

export interface CreateBoardSectionDto {
  boardId: number;
  order: number;
  title: string;
  description?: string;
}

export interface UpdateBoardSectionDto {
  order?: number;
  title?: string;
  description?: string;
}
