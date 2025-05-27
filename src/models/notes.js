import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Prevent model overwrite issue in development (hot-reload)
const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
