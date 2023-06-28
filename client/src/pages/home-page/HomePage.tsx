import { FC } from "react";

import AppInfo from "../../components/app-info";
import PageTitle from "../../components/common/page-title";

const HomePage: FC = () => {
  return (
    <>
      <PageTitle>HomePage</PageTitle>
      <AppInfo />
    </>
  );
};

export default HomePage;
