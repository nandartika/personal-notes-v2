import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
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
  note: PropTypes.array.isRequired,
};

export default NotesList;
