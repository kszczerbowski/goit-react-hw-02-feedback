import React, { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;
    return (
      <>
        <p className={css.grade}>Good: {good}</p>
        <p className={css.grade}>Neutral: {neutral}</p>
        <p className={css.grade}>Bad: {bad}</p>
        <p className={css.grade}>Total: {total}</p>
        <p className={css.grade}>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
