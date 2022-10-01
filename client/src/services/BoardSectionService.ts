import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { IBoardSection } from "../store/models/BoardSection";

export default class BoardSectionService {
  static getBoardSections(): Promise<AxiosResponse<IBoardSection[]>> {
    return authApi.get(ApiEndpoints.BOARD_SECTIONS);
  }

  static addBoardSection(
    data: IBoardSection
  ): Promise<AxiosResponse<IBoardSection>> {
    return authApi.post(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static updateBoardSection(
    data: IBoardSection
  ): Promise<AxiosResponse<IBoardSection>> {
    return authApi.put(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static deleteBoardSection(id: string): Promise<AxiosResponse<IBoardSection>> {
    return authApi.delete(`${ApiEndpoints.BOARD_SECTIONS}/${id}`);
  }
}
