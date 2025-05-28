

import MongoConnection from "@/lib/connection";
import Note from "@/models/notes";
import { NextResponse } from "next/server";

export const DELETE = async (request, context) => {
  try {
    const { id } = await context.params;
    await MongoConnection();
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return NextResponse.json(
        {
          error: "Note not found",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to delete note",
      },
      {
        status: 500,
      }
    );
  }
};
export const GET = async (request, context) => {
  try {
    const { id } = await context.params;
    await MongoConnection();
    const note = await Note.findById(id);
    if (!note) {
      return NextResponse.json(
        {
          error: "Note not found",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch note",
      },
      {
        status: 500,
      }
    );
  }
};
export const PUT = async (request, context) => {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { title, description } = body;
    await MongoConnection();
    const note = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );
    if (!note) {
      return NextResponse.json(
        {
          error: "Note not found",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to edit note",
      },
      {
        status: 500,
      }
    );
  }
};
