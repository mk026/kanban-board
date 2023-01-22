import { Typography } from "@mui/material";
import { FC } from "react";

import UpdateProfileForm from "../../components/forms/update-profile-form";
import { useStore } from "../../hooks/useStore";

const ProfilePage: FC = () => {
  const { userStore } = useStore();

  return (
    <>
      <Typography>Profile of {userStore.user?.name}</Typography>
      <UpdateProfileForm />
    </>
  );
};

export default ProfilePage;
