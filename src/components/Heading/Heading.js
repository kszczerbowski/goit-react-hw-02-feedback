import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Heading extends Component {
  render() {
    const { title } = this.props;
    return <h2>{title}</h2>;
  }
}

Heading.propTypes = {
  title: PropTypes.string,
};
