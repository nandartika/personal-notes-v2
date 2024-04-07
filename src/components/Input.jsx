import React from "react";
import PropTypes from "prop-types";

function Input({ classname, placeholder }) {
  return <input className={classname} type="text" placeholder={placeholder} />;
}

Input.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
