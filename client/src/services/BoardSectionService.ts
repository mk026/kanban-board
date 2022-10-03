import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import {
  BoardSectionDto,
  CreateBoardSectionDto,
  UpdateBoardSectionDto,
} from "../store/models/BoardSection";

export default class BoardSectionService {
  static getBoardSections(
    boardId: number
  ): Promise<AxiosResponse<BoardSectionDto[]>> {
    return authApi.get(ApiEndpoints.BOARD_SECTIONS, { params: { boardId } });
  }

  static addBoardSection(
    data: CreateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionDto>> {
    return authApi.post(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static updateBoardSection(
    data: UpdateBoardSectionDto
  ): Promise<AxiosResponse<BoardSectionDto>> {
    return authApi.put(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static deleteBoardSection(
    id: number
  ): Promise<AxiosResponse<BoardSectionDto>> {
    return authApi.delete(`${ApiEndpoints.BOARD_SECTIONS}/${id}`);
  }
}
