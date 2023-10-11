import React from 'react';
import PropTypes from 'prop-types';

export default function Section({title, children}) {
  return  (
    <>
        <h2 className='title'>{title}</h2>
        {children}
    </>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}