import { FC } from "react";
import { Alert, AlertTitle, List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../hooks/useStore";

const Alerts: FC = () => {
  const { uiStore } = useStore();

  return (
    <List>
      {uiStore.alerts.map((alert) => (
        <Alert
          key={alert.id}
          severity={alert.severity}
          onClose={() => uiStore.removeAlert(alert.id)}
        >
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      ))}
    </List>
  );
};

export default observer(Alerts);
