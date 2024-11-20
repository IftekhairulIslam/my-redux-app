import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import configStore from "./store/configStore.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={configStore}>
    <App />
  </Provider>
);
