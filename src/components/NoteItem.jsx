import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { Link, useNavigate } from "react-router-dom";

function NoteItem({ id, title, createdAt, body }) {
  const navigate = useNavigate();

  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
