import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return Object.values(options).map(option => {
      return (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
          type="button"
          className={css.feedbackButton}
        >
          {option}
        </button>
      );
    });
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
