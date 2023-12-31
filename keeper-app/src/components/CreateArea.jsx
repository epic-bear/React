import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNote] = useState({
    title: "",
    text: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(newNote);
    event.preventDefault();
    cleanArea();
  }

  function cleanArea() {
    setNote({
      text: "",
      title: ""
    });
  }

  return (
    <div className="createArea">
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={newNote.title}
          placeholder="Title"
        />
        <textarea
          name="text"
          onChange={handleChange}
          value={newNote.text}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
