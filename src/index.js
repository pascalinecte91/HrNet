import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "redux/store";
import App from "./App";

/**
 * Fonction principale pour rendre l'application React.
 * Outils pouvant améliorer la robustesse, la performance et la maintenabilité de l'application.
 */
createRoot(document.getElementById("root")).render(
  // React.StrictMode détecte les problèmes potentiels
  <React.StrictMode>
    {/* Fournit le store Redux à l'appli */}
    <Provider store={store}>
      {/* Persiste et réhydrate le store Redux */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
