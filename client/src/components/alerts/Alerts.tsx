import { FC } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../hooks/useStore";
import AlertItem from "../alert-item/AlertItem";

const Alerts: FC = () => {
  const { uiStore } = useStore();

  return (
    <List data-testid="alerts-list">
      {uiStore.alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} />
      ))}
    </List>
  );
};

export default observer(Alerts);
