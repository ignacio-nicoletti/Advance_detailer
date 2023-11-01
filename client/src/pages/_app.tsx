import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "../redux/store/store";
import { Provider } from "react-redux";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
// own css files here
import AOS from "aos";

import "aos/dist/aos.css";
// import "../scss/style.scss";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
