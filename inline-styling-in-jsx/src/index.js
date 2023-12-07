import React from 'react';
import ReactDOM from 'react-dom/client';

const time = new Date().getHours();

const customStyle = {
  color: "crimson",
};

var greating = "";

if (time< 12) {
  greating = "Good Morning";
  customStyle.color = "red";
} else if (time >= 18) {
  greating = "Good Evening";
  customStyle.color = "blue";
} else {
  greating = "Good Afternoon";
  customStyle.color = "green";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <h1 style={customStyle}>{greating}</h1>
);
