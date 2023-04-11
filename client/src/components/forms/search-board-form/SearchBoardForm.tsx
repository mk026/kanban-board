import { FC } from "react";

import { useSearchBoardForm } from "../../../hooks/useSearchBoardForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SearchBoardForm: FC = () => {
  const { formMethods, onSubmit } = useSearchBoardForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Board Title" name="title" />
      <LoadingButton isLoading={false}>Search</LoadingButton>
    </Form>
  );
};

export default SearchBoardForm;
