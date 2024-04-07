import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
      ))}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesList;
