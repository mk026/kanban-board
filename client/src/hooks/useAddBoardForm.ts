import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  BoardFormValues,
  boardValidationSchema,
} from "../validation/boardValidation";

export const useAddBoardForm = () => {
  const { boardStore, uiStore } = useStore();
  const formMethods = useForm<BoardFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardForm();

  const addBoardHandler = async (values: BoardFormValues) => {
    await boardStore.createBoard(values);
    formMethods.reset();
    closeFormHandler();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addBoardHandler),
    isLoading: boardStore.isLoading,
    isOpen: uiStore.addBoardFormIsActive,
    onClose: closeFormHandler,
  };
};
