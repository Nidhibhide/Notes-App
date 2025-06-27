
import axios from "axios";

// Create note
export const create = async (data) => {
  const response = await axios.post("/api/notes", data);
  return response.data;
};

// Get all notes
export const getAll = async () => {
  const response = await fetch("/api/notes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

// Delete by ID
export const deleteById = async (id) => {
  const response = await axios.delete(`/api/notes/${id}`);
  return response.data;
};

// Get by ID
export const getById = async (id) => {
  const response = await axios.get(`/api/notes/${id}`);
  return response.data;
};

// Edit note
export const edit = async (id, data) => {
  const response = await axios.put(`/api/notes/${id}`, data);
  return response.data;
};
