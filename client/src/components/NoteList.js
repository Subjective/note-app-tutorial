import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../services/api";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      // Filter out the deleted note from state
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/note-form">New Note</Link>
    </div>
  );
}

export default NoteList;
