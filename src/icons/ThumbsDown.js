import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ThumbsDown = props => {
  const { color, size, className, ...otherProps } = props;
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
      <path d="M8.61 12.09v2.797c0 1.158.939 2.097 2.097 2.097l2.797-6.292V3H5.379A1.398 1.398 0 003.981 4.19l-.965 6.293a1.398 1.398 0 001.398 1.608H8.61z"></path>
      <path d="M13.504 3h1.867c.819-.014 1.52.587 1.629 1.399v4.894c-.11.812-.81 1.49-1.63 1.476h-1.866V3z"></path>
    </svg>
  );
};

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ThumbsDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ThumbsDown;
