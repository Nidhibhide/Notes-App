import axios from "axios";

//api calls
export const create = async (data) => {
  const response = await axios.post("/api/notes", data);
  return response.data;
};

export const getAll = async () => {
  const response = await axios.get("/api/notes");
  return response.data;
};

export const deleteById = async (id) => {
  const response = await axios.delete(`/api/notes/${id}`);
  return response.data;
};

export const edit = async (id, data) => {
  const response = await axios.put(`/api/notes/${id}`, data);
  return response.data;
};
