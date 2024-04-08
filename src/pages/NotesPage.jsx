import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/network-data";

import NotesList from "../components/NotesList";
import Input from "../components/Input";
import FloatButton from "../components/FloatButton";
import { FiPlus as PlusIcon } from "react-icons/fi";

function NotesPage({ type }) {
  const navigate = useNavigate();
  const [notes, setNotes] = useState();

  const isArchived = type === "archived";

  useEffect(() => {
    const getNotes = async () => {
      const { data } = isArchived
        ? await getArchivedNotes()
        : await getActiveNotes();
      setNotes(data);
    };

    getNotes();
  }, []);

  const handleAddButtonClick = () => {
    navigate("/add-note");
  };

  return (
    <section className="homepage">
      <h2>Catatan{isArchived ? "Arsip" : "Aktif"}</h2>

      <section className="search-bar">
        <Input placeholder="Cari berdasarkan judul ..." />
      </section>

      {notes && <NotesList notes={notes} />}

      <section className="homepage__action">
        <FloatButton title="Tambah" onClick={handleAddButtonClick}>
          <PlusIcon />
        </FloatButton>
      </section>
    </section>
  );
}

NotesPage.propTypes = {
  type: PropTypes.string,
};

export default NotesPage;
