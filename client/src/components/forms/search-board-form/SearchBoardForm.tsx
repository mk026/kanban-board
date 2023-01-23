import { FC } from "react";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

const SearchBoardForm: FC = () => {
  const methods = useForm<{ title: string }>();

  const searchBoardHandler = (data: { title: string }) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(searchBoardHandler)}>
        <FormField label="Board Title" name="title" />
        <LoadingButton isLoading={false}>Search</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default SearchBoardForm;
