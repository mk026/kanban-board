export interface BoardResponse {
  id: number;
  title: string;
  description?: string;
}

export interface CreateBoardDto {
  title: string;
  description?: string;
}

export interface UpdateBoardDto {
  title?: string;
  description?: string;
}
