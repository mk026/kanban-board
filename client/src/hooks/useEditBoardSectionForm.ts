import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../validation/boardSectionValidation";
import { BoardSection } from "../store/board-section/BoardSection";

export const useEditBoardSectionForm = (
  boardSection: BoardSection,
  onClose: () => void
) => {
  const { boardStore } = useStore();
  const formMethods = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    defaultValues: { title: boardSection.title },
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const editBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await boardStore.activeBoard.updateBoardSection(boardSection.id, values);
    formMethods.reset();
    onClose();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(editBoardSectionHandler),
    isLoading: boardSection.isLoading,
  };
};
