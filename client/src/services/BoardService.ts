import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { BoardResponse, CreateBoardDto, UpdateBoardDto } from "../types";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<BoardResponse[]>> {
    return authApi.get(ApiEndpoints.BOARDS);
  }

  static getBoard(id: number): Promise<AxiosResponse<BoardResponse>> {
    return authApi.get(`${ApiEndpoints.BOARDS}/${id}`);
  }

  static addBoard(data: CreateBoardDto): Promise<AxiosResponse<BoardResponse>> {
    return authApi.post(ApiEndpoints.BOARDS, data);
  }

  static updateBoard(
    data: UpdateBoardDto
  ): Promise<AxiosResponse<BoardResponse>> {
    return authApi.put(ApiEndpoints.BOARDS, data);
  }

  static deleteBoard(id: number): Promise<AxiosResponse<BoardResponse>> {
    return authApi.delete(`${ApiEndpoints.BOARDS}/${id}`);
  }
}
