import { FC } from "react";
import { Paper, Typography } from "@mui/material";

import { User } from "../../store/user/User";

import classes from "./UserInfo.module.scss";

interface UserInfoProps {
  user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <Paper className={classes.info}>
      <Typography>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <Typography>{user.email}</Typography>
    </Paper>
  );
};

export default UserInfo;
