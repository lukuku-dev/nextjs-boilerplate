import GlobalStyle from "../styled/GlobalStyle";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
