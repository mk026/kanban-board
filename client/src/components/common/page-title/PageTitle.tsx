import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const PageTitle: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};

export default PageTitle;
