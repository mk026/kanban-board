import { FC } from "react";
import { useForm } from "react-hook-form";

import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SearchBoardForm: FC = () => {
  const methods = useForm<{ title: string }>();

  const searchBoardHandler = (data: { title: string }) => console.log(data);

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(searchBoardHandler)}
    >
      <FormField label="Board Title" name="title" />
      <LoadingButton isLoading={false}>Search</LoadingButton>
    </Form>
  );
};

export default SearchBoardForm;
