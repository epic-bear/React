import React, { useState } from "react";

function Note(props) {
const [isMouseOver, setMouseOver] = useState(false);

function handleMouseOver() {
  setMouseOver(true);
}

function handleMouseOut() {
  setMouseOver(false);
}

  return (
    <div 
    style={{backgroundColor: isMouseOver ? "orange" : "white"}} className="note"
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
