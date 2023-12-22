import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import notes from "../notes";

function createNote(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}

function App() {
  
  function addNote(note) {

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}
      />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
