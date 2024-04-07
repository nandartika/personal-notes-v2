import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";

import NotesList from "../components/NotesList";
import Input from "../components/Input";
import FloatButton from "../components/FloatButton";
import { FiPlus as PlusIcon } from "react-icons/fi";

function NotesPage() {
  const { type } = useParams();
  const [notes, setNotes] = useState();

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
    };

    getNotes();
  }, []);

  return (
    <section className="homepage">
      <h2>Catatan Active</h2>

      <section className="search-bar">
        <Input placeholder="Cari berdasarkan judul ..." />
      </section>

      {notes && <NotesList notes={notes} />}

      <section className="homepage__action">
        <FloatButton title="Tambah">
          <PlusIcon />
        </FloatButton>
      </section>
    </section>
  );
}

export default NotesPage;
