import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Collaborators = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M8.25 8.9a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9z"></path>
      <path d="M13.013 4.35a2.449 2.449 0 010 4.2"></path>
      <path d="M3 16.18v.42h10.5v-.42c0-1.568 0-2.352-.305-2.951a2.8 2.8 0 00-1.224-1.224c-.599-.305-1.383-.305-2.951-.305H7.48c-1.568 0-2.352 0-2.951.305a2.8 2.8 0 00-1.224 1.224C3 13.828 3 14.612 3 16.18z"></path>
      <path d="M17 16.6v-.42c0-1.568 0-2.352-.305-2.951a2.8 2.8 0 00-1.224-1.224"></path>
    </svg>
  );
};

Collaborators.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Collaborators.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Collaborators;
