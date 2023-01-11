import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import {
  BoardSectionResponse,
  CreateBoardSectionDto,
  UpdateBoardSectionDto,
} from "../types";

export default class BoardSectionService {
  static getBoardSections(
    boardId: number
  ): Promise<AxiosResponse<BoardSectionResponse[]>> {
    return authApi.get(ApiEndpoints.BOARD_SECTIONS, { params: { boardId } });
  }

  static addBoardSection(
    data: CreateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.post(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static updateBoardSection(
    data: UpdateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.put(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static deleteBoardSection(
    id: number
  ): Promise<AxiosResponse<BoardSectionResponse>> {
    return authApi.delete(`${ApiEndpoints.BOARD_SECTIONS}/${id}`);
  }
}
