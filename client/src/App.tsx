import { useEffect } from "react";

import AppRouter from "./components/routing/app-router/AppRouter";
import Alerts from "./components/alerts/Alerts";
import Header from "./components/header/Header";
import { useStore } from "./hooks/useStore";

function App() {
  const { authStore } = useStore();

  useEffect(() => {
    authStore.checkAuth();
  }, [authStore]);

  return (
    <>
      <Header />
      <AppRouter />
      <Alerts />
    </>
  );
}

export default App;
