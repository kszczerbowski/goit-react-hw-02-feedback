import css from './App.module.css';
import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  positiveFeedback = 0;
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  addGrade = event => {
    const gradeType = event.currentTarget.dataset.option;
    this.setState({
      [gradeType]: this.state[gradeType] + 1,
    });
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return ((100 * this.state.good) / this.countTotalFeedback()).toFixed(0);
    }
  };
  render() {
    const options = {
      good: 'Good',
      neutral: 'Neutral',
      bad: 'Bad',
    };
    const { good, neutral, bad } = this.state;
    let { total, positiveFeedback } = this;
    total = this.countTotalFeedback();
    positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addGrade} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
