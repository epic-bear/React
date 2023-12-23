import React, { useState } from "react";

function Note(props) {
const [isMouseOver, setMouseOver] = useState(false);

function handleMouseOver() {
  setMouseOver(true);
}

function handleMouseOut() {
  setMouseOver(false);
}

function handleClick() {
  props.onDelete(props.id);
}

  return (
    <div 
    style={{backgroundColor: isMouseOver ? "#f5ba13" : "white"}} className="note"
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
