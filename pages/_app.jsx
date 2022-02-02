import "../styles/globals.css";
import  store from "./../redux/store/index";
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import { Provider } from "react-redux";
import { ContextsProvider } from './../contexts/app/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "./../theme";
import RTL from "./../theme/RTL";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store)
  return (
    <ThemeProvider theme={muiTheme}>
      <RTL>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ContextsProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </ContextsProvider>
          </PersistGate>
        </Provider>
      </RTL>
    </ThemeProvider>
  );
}

export default MyApp;
