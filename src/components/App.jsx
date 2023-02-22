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
  addGrade = option => {
    console.log(option)
    this.setState({
      [option]: this.state[option] + 1,
    });
  };
  render() {
    const options = {
      good: 'Good',
      neutral: 'Neutral',
      bad: 'Bad',
    };
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedbackPercentage =
      total === 0 ? 0 : Math.round((good / total) * 100);
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addGrade} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
