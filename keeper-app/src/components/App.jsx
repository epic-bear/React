import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import notes from "../notes";



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
         setNotes(prevNotes => {
        return  [...prevNotes, note];
         })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}
      />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.text} onDelete={deleteNote}/>;
      })
      }
      <Footer />
    </div>
  );
}

export default App;
