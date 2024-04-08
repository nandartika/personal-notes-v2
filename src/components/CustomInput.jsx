import React from "react";
import PropTypes from "prop-types";

function CustomInput({ classname, placeholder, onChange }) {
  return (
    <div
      className={classname}
      contentEditable="true"
      data-placeholder={placeholder}
      onInput={(e) => onChange(e.currentTarget.textContent)}
    />
  );
}

CustomInput.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
