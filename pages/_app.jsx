import "../styles/globals.css";
import { store } from "./../redux";
import { Provider } from "react-redux";
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
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      </RTL>
    </ThemeProvider>
  );
}

export default MyApp;
