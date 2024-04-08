import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import FloatButton from "../components/FloatButton";
import {
  MdOutlineArchive as ArchiveIcon,
  MdOutlineUnarchive as Unarchive,
  MdDeleteOutline as DeleteIcon,
} from "react-icons/md";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getNoteAsync = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error("Error while fetching note:", error);
        setNote(null);
      }
    };

    getNoteAsync();
  }, [id]);

  const handleArchiveButtonClick = async () => {
    try {
      const { error } = note?.archived
        ? await unarchiveNote(id)
        : await archiveNote(id);
      if (!error) {
        navigate(0);
      }
    } catch (error) {
      console.error("Error while fetching note:", error);
    }
  };

  const handleDeleteButtonClick = async () => {
    try {
      const { error } = await deleteNote(id);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error while fetching note:", error);
    }
  };

  return (
    <section className="detail-page">
      {note ? (
        <>
          <h3 className="detail-page__title">{note?.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note?.createdAt)}
          </p>
          <div className="detail-page__body">{note?.body}</div>

          <div className="detail-page__action">
            <FloatButton title="Arsipkan" onClick={handleArchiveButtonClick}>
              {note?.archived ? <Unarchive /> : <ArchiveIcon />}
            </FloatButton>
            <FloatButton title="Hapus" onClick={handleDeleteButtonClick}>
              <DeleteIcon />
            </FloatButton>
          </div>
        </>
      ) : (
        <div className="detail-page__body">Loading ...</div>
      )}
    </section>
  );
}

export default DetailPage;
