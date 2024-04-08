import React from "react";
import PropTypes from "prop-types";

function Input({ classname, placeholder, value, onChange }) {
  return (
    <input
      className={classname}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
