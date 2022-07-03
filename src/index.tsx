import ReactDOM from "react-dom/client"
import "./scss/index.scss"
import React from "react"
import App from "./App"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'state/store';

ReactDOM.createRoot(
    (document.getElementById("root") as HTMLElement)
).render( <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>)