import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";

const AddBoardSectionForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const addBoardSectionHandler = (values: BoardSectionFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addBoardSectionHandler)}>
      <label>
        Section title
        <input type="text" {...register("title")} />
      </label>
      {errors.title && <p>{errors.title.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddBoardSectionForm;
