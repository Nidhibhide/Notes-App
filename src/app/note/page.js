import NoteForm from "@/components/AddNote";
import { Suspense } from "react";
export default function AddNoteForm() {
  return (
    <>
      <Suspense fallback={<div>Loading form...</div>}>
        <NoteForm />
      </Suspense>
    </>
  );
}
