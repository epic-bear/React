import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

var notes = [
    {
        title: "title1",
        content: "text"
    },
    {
        title: "title2",
        content: "text"
    },
    {
        title: "title3",
        content: "text"
    }
]

function createNote(note) {
   return <Note title={note.title} content={note.content}/>
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
