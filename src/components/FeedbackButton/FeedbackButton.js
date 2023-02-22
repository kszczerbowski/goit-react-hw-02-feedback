import css from './FeedbackButton.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackButton extends Component {
  render() {
    const { option, changeHandler } = this.props;
    return (
      <button
        onClick={changeHandler}
        type="button"
        id={option.toLowerCase()}
        className={css.feedbackButton}
      >
        {option}
      </button>
    );
  }
}

FeedbackButton.propTypes = {
  option: PropTypes.string,
  changeHandler: PropTypes.func,
};
