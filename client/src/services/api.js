import axios from "axios";

const baseURL = "http://localhost:3001/api"; // Change URL based on your server setup

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNotes = async () => {
  const response = await api.get("/notes");
  return response.data;
};

export const addNote = async (note) => {
  const response = await api.post("/notes", note);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await api.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};

export default api;
