import { FC } from "react";

import PageTitle from "../../components/common/page-title";
import NotFoundMessage from "../../components/not-found-message";

const NotFoundPage: FC = () => {
  return (
    <>
      <PageTitle>Page not found</PageTitle>
      <NotFoundMessage />
    </>
  );
};

export default NotFoundPage;
