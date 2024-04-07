import React from "react";
import PropTypes from "prop-types";

function FloatButton({ children, title, onClick }) {
  return (
    <button className="action" type="button" title={title} onClick={onClick}>
      {children}
    </button>
  );
}

FloatButton.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FloatButton;
