//get all notes
//add note
import Note from "@/models/notes";
import MongoConnection from "@/lib/connection";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, description } = body;
    await MongoConnection();
    const note = await Note.create({ title, description });
    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create note",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = async () => {
  try {
    await MongoConnection();
    const notes = await Note.find();
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch notes",
      },
      {
        status: 500,
      }
    );
  }
};
