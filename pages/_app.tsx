import { useEffect } from "react";

import GlobalStyle from "../styled/GlobalStyle";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#4cba4d",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function App({ Component, pageProps }) {
  useEffect(() => {
    function setRealViewportHeight() {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--real-vh", `${vh}px`);
    }

    // Set the initial height
    setRealViewportHeight();

    // Update the height whenever the window is resized
    window.addEventListener("resize", setRealViewportHeight);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", setRealViewportHeight);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
