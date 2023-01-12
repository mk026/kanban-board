import { AxiosResponse } from "axios";

import { authApi } from "../api";
import { config } from "../config";
import {
  BoardSectionResponse,
  CreateBoardSectionDto,
  UpdateBoardSectionDto,
} from "../types";

export default class BoardSectionService {
  static getBoardSections(
    boardId: number
  ): Promise<AxiosResponse<BoardSectionResponse[]>> {
    return authApi.get(config.boardSectionsUrl, { params: { boardId } });
  }

  static addBoardSection(
    data: CreateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.post(config.boardSectionsUrl, data);
  }

  static updateBoardSection(
    data: UpdateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.put(config.boardSectionsUrl, data);
  }

  static deleteBoardSection(
    id: number
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.delete(`${config.boardSectionsUrl}/${id}`);
  }
}
