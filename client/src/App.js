import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

function App() {
  return (
    <Routes>
      {/* Route to display NoteList */}
      <Route path="/" element={<NoteList />} />
      {/* Route to display NoteForm for adding/editing */}
      <Route path="/note-form" element={<NoteForm />} />
      {/* Route to display a single Note */}
      <Route path="/note/:id" element={<Note />} />
    </Routes>
  );
}

export default App;
