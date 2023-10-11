import PropTypes from 'prop-types';
import React from 'react'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className="feedback__controls">
      {options.map((option, index) => (
        <li className="controls__item" key={index}>
          <button className="controls__button" name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
