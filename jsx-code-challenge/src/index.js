import React from "react";
import ReactDOM from "react-dom/client";

const name = "Bob";
const number = Math.floor(Math.random() * 10);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello {name}</h1>
    <h2>Your lucky number is {number}</h2>
    
    <h2>Random picture:</h2>
    <div>
      <img src="https://picsum.photos/200"></img>
    </div>
    <p>© {new Date().getFullYear()}</p>
  </div>
);
