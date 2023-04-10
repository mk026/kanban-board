import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  BoardFormValues,
  boardValidationSchema,
} from "../validation/boardValidation";
import { Board } from "../store/board/Board";

export const useEditBoardForm = (board: Board) => {
  const { boardStore, uiStore } = useStore();
  const formMethods = useForm<BoardFormValues>({
    mode: "onBlur",
    defaultValues: { title: board.title, description: board.description },
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleEditBoardForm();

  const editBoardHandler = async (values: BoardFormValues) => {
    await boardStore.updateBoard(board.id, values);
    formMethods.reset();
    closeFormHandler();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(editBoardHandler),
    isLoading: boardStore.isLoading,
    isOpen: uiStore.editBoardFormIsActive,
    onClose: closeFormHandler,
  };
};
