import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

const notes = [
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
function App() {
  return (
    <div>
      <Header />
      <Note title={notes[0].title} content={notes[0].content}/>
      <Note title={notes[1].title} content={notes[1].content}/>
      <Note title={notes[2].title} content={notes[2].content}/>
      <Footer />
    </div>
  );
}

export default App;
