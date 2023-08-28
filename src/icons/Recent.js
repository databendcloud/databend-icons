import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Recent = props => {
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
      <path d="M8.2 9.981V5.8a1.8 1.8 0 013.6 0v.602"></path>
      <path d="M11.8 10.001V14.2a1.8 1.8 0 01-3.6 0v-.609"></path>
      <path d="M10 11.8H5.795A1.798 1.798 0 014 10c0-.994.804-1.8 1.795-1.8h.602"></path>
      <path d="M10 8.2h4.197C15.193 8.2 16 9.006 16 10s-.807 1.8-1.803 1.8h-.577"></path>
    </svg>
  );
};

Recent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Recent.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Recent;
