import { FC } from "react";
import { Paper, Typography } from "@mui/material";

import { User } from "../../store/user/User";

interface UserInfoProps {
  user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <Paper>
      <Typography>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <Typography>{user.email}</Typography>
    </Paper>
  );
};

export default UserInfo;
