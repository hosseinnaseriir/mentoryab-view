import "../styles/globals.css";
import  store from "./../redux/store/index";
import { Provider } from "react-redux";
import { ContextsProvider } from './../contexts/app/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "./../theme";
import RTL from "./../theme/RTL";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <RTL>
        <Provider store={store}>
          <ContextsProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </ContextsProvider>
        </Provider>
      </RTL>
    </ThemeProvider>
  );
}

export default MyApp;
