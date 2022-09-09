import { AxiosResponse } from "axios";

import { api, ApiEndpoints } from "../api";
import { IBoard } from "../models/IBoard";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<IBoard[]>> {
    return api.get(ApiEndpoints.BOARDS);
  }

  static addBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return api.post(ApiEndpoints.BOARDS, data);
  }

  static updateBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return api.put(ApiEndpoints.BOARDS, data);
  }

  static deleteBoard(id: string): Promise<AxiosResponse<IBoard>> {
    return api.delete(`${ApiEndpoints.BOARDS}/${id}`);
  }
}
