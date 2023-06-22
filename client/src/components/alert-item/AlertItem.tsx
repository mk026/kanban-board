import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Alert, AlertTitle } from "@mui/material";

import { IAlert } from "../../store/ui/UIStore";
import { useStore } from "../../hooks/useStore";

interface AlertItemProps {
  alert: IAlert;
}

const AlertItem: FC<AlertItemProps> = ({ alert }) => {
  const { uiStore } = useStore();

  return (
    <Alert
      key={alert.id}
      severity={alert.severity}
      onClose={() => uiStore.removeAlert(alert.id)}
    >
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.message}
    </Alert>
  );
};

export default observer(AlertItem);
