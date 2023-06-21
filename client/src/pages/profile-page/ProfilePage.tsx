import { FC } from "react";

import UpdateProfileForm from "../../components/forms/update-profile-form";
import { useStore } from "../../hooks/useStore";
import PageTitle from "../../components/page-title";

const ProfilePage: FC = () => {
  const { userStore } = useStore();

  return (
    <>
      <PageTitle>Profile of {userStore.user?.name}</PageTitle>
      <UpdateProfileForm />
    </>
  );
};

export default ProfilePage;
