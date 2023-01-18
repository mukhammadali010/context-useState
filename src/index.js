import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FoodContextProvider from "./context/FoodContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodContextProvider>
   <App />
  </FoodContextProvider>
);
