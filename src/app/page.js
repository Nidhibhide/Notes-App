import Image from "next/image";
import Header from "@/Components/Header";
import AddNoteForm from "@/Components/AddNote";
import NotesTable from "@/Components/Table";

export default function Home() {
  return (
    <>
      <NotesTable />
    </>
  );
}
