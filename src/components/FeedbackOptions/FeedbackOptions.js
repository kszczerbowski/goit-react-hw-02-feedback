import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return Object.values(options).map((value) => {
            return <button key={value} onClick={onLeaveFeedback} type="button" data-option={value.toLowerCase()} className={css.feedbackButton}>{value}</button>
        })
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}
