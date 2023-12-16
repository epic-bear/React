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
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div>
      <Header />
      <div>
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
