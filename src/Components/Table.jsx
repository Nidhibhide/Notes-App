"use client";
import { deleteById, getAll } from "@/lib/api/notes";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const NotesTable = () => {
  const handleEdit = (note) => {
    localStorage.setItem("editNote", JSON.stringify(note));
    router.push("/note");
  };

  const router = useRouter();
  const [notes, setNotes] = useState([]);

  const handleDelete = async (noteId) => {
    try {
      const response = await deleteById(noteId);
      await fetchNotes();
    } catch (err) {
      console.log(err);
    }
  };
  const fetchNotes = async () => {
    try {
      const notes = await getAll();
      setNotes(notes);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="max-w-6xl mx-auto mt-10 px-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">
        My Notes
      </h2>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {notes.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No notes available.
                </td>
              </tr>
            ) : (
              notes.map((note) => (
                <tr
                  key={note._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{note.title}</td>
                  <td className="px-6 py-4">{note.description}</td>
                  <td className="px-6 py-4 text-center space-x-3">
                    <button
                      onClick={() => handleEdit(note)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesTable;
