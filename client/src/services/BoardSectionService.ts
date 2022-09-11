import { AxiosResponse } from "axios";

import { api, ApiEndpoints } from "../api";
import { IBoardSection } from "../models/IBoardSection";

export default class BoardSectionService {
  static getBoardSections(): Promise<AxiosResponse<IBoardSection[]>> {
    return api.get(ApiEndpoints.BOARD_SECTIONS);
  }

  static addBoardSection(
    data: IBoardSection
  ): Promise<AxiosResponse<IBoardSection>> {
    return api.post(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static updateBoardSection(
    data: IBoardSection
  ): Promise<AxiosResponse<IBoardSection>> {
    return api.put(ApiEndpoints.BOARD_SECTIONS, data);
  }

  static deleteBoardSection(id: string): Promise<AxiosResponse<IBoardSection>> {
    return api.delete(`${ApiEndpoints.BOARD_SECTIONS}/${id}`);
  }
}
