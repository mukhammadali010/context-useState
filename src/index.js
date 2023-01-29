import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsContainer from "./components/Home/context/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContainer>
    <App />
  </ProductsContainer>
);
