import React from 'react';
import PropTypes from 'prop-types';

const flatten = (text, child) => (typeof child === 'string'
  ? text + child
  : React.Children.toArray(child.props.children).reduce(flatten, text));

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
const HeadingRenderer = ({ level, children }) => {
  const children2 = React.Children.toArray(children);
  const text = children2.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement(`h${level}`, { id: slug }, children2);
};

HeadingRenderer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  level: PropTypes.number.isRequired,
};

export default HeadingRenderer;
