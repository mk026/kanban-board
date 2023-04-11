import { useForm } from "react-hook-form";

export const useSearchBoardForm = () => {
  const formMethods = useForm<{ title: string }>();

  const searchBoardHandler = (data: { title: string }) => console.log(data);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(searchBoardHandler),
  };
};
