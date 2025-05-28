import axios from "axios";

//api calls
export const create = async (data) => {
  const response = await axios.post("/api/notes", data);
  return response.data;
};

const BASE_URL = process.env.BASE_URL;
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

export const deleteById = async (id) => {
  const response = await axios.delete(`/api/notes/${id}`);
  return response.data;
};
export const getById = async (id) => {
  const response = await axios.get(`/api/notes/${id}`);
  return response.data;
};
export const edit = async (id, data) => {
  const response = await axios.put(`/api/notes/${id}`, data);
  return response.data;
};
