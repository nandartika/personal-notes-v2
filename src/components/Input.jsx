import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  const { id, type, title } = props

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} />
    </>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Input
