import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";

ReactDOM.render(
  <React.Fragment>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.Fragment>,
  document.getElementById("root")
);
