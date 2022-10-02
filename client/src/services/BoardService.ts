import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import {
  BoardDto,
  CreateBoardDto,
  UpdateBoardDto,
} from "../store/models/Board";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<BoardDto[]>> {
    return authApi.get(ApiEndpoints.BOARDS);
  }

  static addBoard(data: CreateBoardDto): Promise<AxiosResponse<BoardDto>> {
    return authApi.post(ApiEndpoints.BOARDS, data);
  }

  static updateBoard(data: UpdateBoardDto): Promise<AxiosResponse<BoardDto>> {
    return authApi.put(ApiEndpoints.BOARDS, data);
  }

  static deleteBoard(id: string): Promise<AxiosResponse<BoardDto>> {
    return authApi.delete(`${ApiEndpoints.BOARDS}/${id}`);
  }
}
