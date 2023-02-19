import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Notification.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
