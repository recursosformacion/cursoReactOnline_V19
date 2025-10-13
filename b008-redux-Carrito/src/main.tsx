import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import restaurante from "./redux/restaurante";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={restaurante}>
      <App />
    </Provider>
  </StrictMode>
);
