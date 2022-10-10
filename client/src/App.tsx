import AppRouter from "./components/routing/app-router/AppRouter";
import Alerts from "./components/alerts/Alerts";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Alerts />
    </>
  );
}

export default App;
