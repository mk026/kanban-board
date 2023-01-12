export interface CreateBoardSectionDto {
  boardId: number;
  order: number;
  title: string;
  description?: string;
}
