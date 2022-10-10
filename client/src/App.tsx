import { useEffect } from "react";

import Layout from "./components/layout/Layout";
import AppRouter from "./components/routing/app-router/AppRouter";
import { useStore } from "./hooks/useStore";

function App() {
  const { authStore } = useStore();

  useEffect(() => {
    authStore.checkAuth();
  }, [authStore]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
