import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  const { id, type, label } = props

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input
