import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../validation/boardSectionValidation";
import { Board } from "../store/board/Board";

export const useAddBoardSectionForm = (board: Board) => {
  const { boardStore, uiStore } = useStore();
  const formMethods = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardSectionForm();

  const addBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await board.createBoardSection({
      ...values,
      boardId: board.id,
      order: boardStore.activeBoard.newSectionOrder,
    });
    formMethods.reset();
    closeFormHandler();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addBoardSectionHandler),
    isLoading: boardStore.isLoading,
    isOpen: uiStore.addBoardSectionFormIsActive,
    onClose: closeFormHandler,
  };
};
