import React from "react";
import ReactDOM from "react-dom/client";

const name = "Bob";
const number = Math.floor(Math.random() * 10);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello {name}</h1>
    <h2>Your lucky number is {number}</h2>
    <p>© {new Date().getFullYear()}</p>
  </div>
);
