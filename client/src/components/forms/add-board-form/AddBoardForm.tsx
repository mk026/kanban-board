import { FC } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
    <Container>
      <Typography>Add new board</Typography>
      <Box component="form" onSubmit={handleSubmit(addBoardHandler)}>
        <TextField
          label="Board title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title && errors.title.message}
        />
        <TextField
          label="Board description (optional)"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
        />
        <Button type="submit">Submit</Button>
        {boardStore.isLoading && <span>Loading...</span>}
      </Box>
    </Container>
  );
};

export default observer(AddBoardForm);
