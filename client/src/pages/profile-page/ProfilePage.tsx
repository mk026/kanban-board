import { FC } from "react";

import { useStore } from "../../hooks/useStore";

const ProfilePage: FC = () => {
  const { userStore } = useStore();

  return <div>Profile of {userStore.user?.name}</div>;
};

export default ProfilePage;
