'use client';
import React, { useState } from 'react';

const NotesTable = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Daily Standup', description: 'Team meeting at 10 AM' },
    { id: 2, title: 'Assignment', description: 'Submit React project by Sunday' },
    { id: 3, title: 'Workout', description: 'Yoga at 6:30 AM' },
  ]);

  const handleEdit = (note) => {
    alert(`Edit Note: ${note.title}`);
  };

  const handleDelete = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">My Notes</h2>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
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
                <tr key={note.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{note.title}</td>
                  <td className="px-6 py-4">{note.description}</td>
                  <td className="px-6 py-4 text-center space-x-3">
                    <button
                      onClick={() => handleEdit(note)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
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
