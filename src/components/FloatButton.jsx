import React from "react";
import PropTypes from "prop-types";

function FloatButton({ children, title }) {
  return (
    <button className="action" type="button" title={title}>
      {children}
    </button>
  );
}

FloatButton.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default FloatButton;
