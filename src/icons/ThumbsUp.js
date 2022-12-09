import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ThumbsUp = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.39 7.894V5.098C11.39 3.939 10.451 3 9.293 3L6.496 9.293v7.691h8.125c.697.008 1.294-.5 1.398-1.189l.965-6.292a1.4 1.4 0 00-1.398-1.609H11.39z"></path>
      <path d="M6.496 9.215H4.629C3.81 9.201 3.11 9.88 3 10.691v4.894c.11.812.81 1.413 1.63 1.399h1.866V9.215z"></path>
    </svg>
  );
};

ThumbsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ThumbsUp.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ThumbsUp;
