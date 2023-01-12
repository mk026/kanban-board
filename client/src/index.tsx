import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import App from "./App";
import StoreProvider from "./context/StoreContext";

import "./styles/index.scss";
import { validateConfig } from "./validation/configValidation";

validateConfig();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </DndProvider>
  </BrowserRouter>
);
