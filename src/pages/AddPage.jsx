import React, { useState } from "react";
import Input from "../components/Input";
import CustomInput from "../components/CustomInput";
import FloatButton from "../components/FloatButton";
import { FaCheck as Check } from "react-icons/fa6";
import useInputChange from "../hooks/useInputChange";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  const [title, handleTitleChange] = useInputChange("");
  const [body, setBody] = useState("");

  const handleCheckButtonClick = async () => {
    try {
      const { error } = await addNote({ title, body });
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error while fetching note:", error);
    }
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <Input
          classname="add-new-page__input__title"
          placeholder="Catatan rahasia"
          value={title}
          onChange={handleTitleChange}
        />
        <CustomInput
          classname="add-new-page__input__body"
          placeholder="Sebenarnya saya adalah ..."
          value={body}
          onChange={setBody}
        />
      </div>

      <div className="add-new-page__action">
        <FloatButton onClick={handleCheckButtonClick} title="Simpan">
          <Check />
        </FloatButton>
      </div>
    </section>
  );
}

export default AddPage;
