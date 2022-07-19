import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styled/GlobalStyle";
import { theme } from "../styled/Theme";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
