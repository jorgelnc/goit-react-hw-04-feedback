import PropTypes from 'prop-types'
import React from 'react';

export default function Notification({message}) {
  return (
    <span className='message'>{message}</span>
)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}