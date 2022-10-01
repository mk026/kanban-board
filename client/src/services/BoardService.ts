import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { IBoard } from "../store/models/Board";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<IBoard[]>> {
    return authApi.get(ApiEndpoints.BOARDS);
  }

  static addBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return authApi.post(ApiEndpoints.BOARDS, data);
  }

  static updateBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return authApi.put(ApiEndpoints.BOARDS, data);
  }

  static deleteBoard(id: string): Promise<AxiosResponse<IBoard>> {
    return authApi.delete(`${ApiEndpoints.BOARDS}/${id}`);
  }
}
