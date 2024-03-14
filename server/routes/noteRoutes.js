const express = require("express");
const router = express.Router();

// Enable CORS for all routes in this router
const cors = require("cors");
router.use(cors());

// Mock array of notes for demonstration
let notes = [
  { id: 1, title: "Sample Note", content: "This is a sample note." },
];

// Get all notes
router.get("/notes", (req, res) => {
  res.json(notes);
});

// Add a new note
router.post("/notes", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(newNote);
  res.status(201).send(newNote);
});

// Update a note by ID
router.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const index = notes.findIndex((note) => note.id === parseInt(id));
  if (index !== -1) {
    notes[index] = { id: parseInt(id), title, content };
    res.json(notes[index]);
  } else {
    res.status(404).send("Note not found");
  }
});

// Delete a note by ID
router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const index = notes.findIndex((note) => note.id === parseInt(id));
  if (index !== -1) {
    notes.splice(index, 1);
    res.sendStatus(204); // No content, successful deletion
  } else {
    res.status(404).send("Note not found");
  }
});

module.exports = router;
