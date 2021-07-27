import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "focus-visible/dist/focus-visible";
import App from "./App";
import { ArticleProvider } from "./context/ArticleContext";
import { BrowserRouter } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { ChakraProvider, ColorModeScript, Container } from "@chakra-ui/react";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Container maxW="container.xl">
        <Global styles={GlobalStyles} />
        <BrowserRouter>
          <ArticleProvider>
            <App />
          </ArticleProvider>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
