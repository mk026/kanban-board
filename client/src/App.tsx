import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/routing/app-router/AppRouter";
import Alerts from "./components/alerts/Alerts";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Alerts />
    </>
  );
}

export default App;
