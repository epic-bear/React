import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import * as Calculator from "./calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <ul>
      <li>{Calculator.add(4, 4)}</li>
      <li>{Calculator.multiply(4, 4)}</li>
      <li>{Calculator.substract(4, 4)}</li>
      <li>{Calculator.devide(4, 4)}</li>
    </ul>
  </div>
);
