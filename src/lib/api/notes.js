import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Create a new note
export const create = async (data) => {
  const response = await axios.post(`${BASE_URL}/api/notes`, data);
  return response.data;
};

// Get all notes
export const getAll = async () => {
  const response = await fetch(`${BASE_URL}/api/notes`, {
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

// Delete note by ID
export const deleteById = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/notes/${id}`);
  return response.data;
};

// Get note by ID
export const getById = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/notes/${id}`);
  return response.data;
};

// Edit note by ID
export const edit = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/api/notes/${id}`, data);
  return response.data;
};
