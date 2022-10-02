import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";

const AddBoardForm: FC = () => {
  const { boardStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardValidationSchema),
  });

  const addBoardHandler = (values: BoardFormValues) => {
    boardStore.createBoard(values);
  };

  return (
    <form onSubmit={handleSubmit(addBoardHandler)}>
      <label>
        Board title
        <input type="text" {...register("title")} />
      </label>
      {errors.title && <p>{errors.title.message}</p>}
      <label>
        Board description (optional)
        <input type="text" {...register("description")} />
      </label>
      {errors.description && <p>{errors.description.message}</p>}
      <Button type="submit">Submit</Button>
      {boardStore.isLoading && <span>Loading...</span>}
    </form>
  );
};

export default observer(AddBoardForm);
