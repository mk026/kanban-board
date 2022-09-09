import { AxiosResponse } from "axios";

import { api } from "../api";
import { IBoard } from "../models/IBoard";

export default class BoardService {
  static getBoards(): Promise<AxiosResponse<IBoard[]>> {
    return api.get("/boards");
  }

  static addBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return api.post("/boards", data);
  }

  static updateBoard(data: IBoard): Promise<AxiosResponse<IBoard>> {
    return api.put("/boards", data);
  }

  static deleteBoard(id: string): Promise<AxiosResponse<IBoard>> {
    return api.delete(`/boards/${id}`);
  }
}
