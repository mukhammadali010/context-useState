import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FrontEndFunc from "./context/Frontend";
import BackendFunc from "./context/Backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <FrontEndFunc>
      <BackendFunc>
        <App />
      </BackendFunc>
    </FrontEndFunc>
  </div>
);
