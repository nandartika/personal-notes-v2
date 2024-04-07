import React from "react";
import PropTypes from "prop-types";

function InputLabel(props) {
  const { id, type, label, value, onChange } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
    </>
  );
}

InputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default InputLabel;
