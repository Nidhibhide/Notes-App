import NotesTable from "@/Components/Table";
import { getAll } from "@/lib/api/notes";
export default async function Home() {
  const notes = await getAll(); //SSR Fetch
  return (
    <>
      <NotesTable noteDetails={notes} />
    </>
  );
}

