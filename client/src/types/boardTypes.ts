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
  id: number;
  title?: string;
  description?: string;
}
