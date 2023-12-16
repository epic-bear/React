import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}

function App() {
  
  setInterval(getTime, 1000);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <Header />
      <div>
        <h1 style={{color: "crimson"}}>{time}</h1>
      </div>
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
