import { AxiosResponse } from "axios";

import { authApi } from "../api";
import { config } from "../config";
import { BoardResponse, CreateBoardDto, UpdateBoardDto } from "../types";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<BoardResponse[]>> {
    return authApi.get(config.boardsUrl);
  }

  static getBoard(id: number): Promise<AxiosResponse<BoardResponse>> {
    return authApi.get(`${config.boardsUrl}/${id}`);
  }

  static addBoard(data: CreateBoardDto): Promise<AxiosResponse<BoardResponse>> {
    return authApi.post(config.boardsUrl, data);
  }

  static updateBoard(
    data: UpdateBoardDto
  ): Promise<AxiosResponse<BoardResponse>> {
    return authApi.put(config.boardsUrl, data);
  }

  static deleteBoard(id: number): Promise<AxiosResponse<BoardResponse>> {
    return authApi.delete(`${config.boardsUrl}/${id}`);
  }
}
