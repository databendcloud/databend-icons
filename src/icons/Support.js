import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Support = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        clipRule="evenodd"
        d="M15.893 15.893A8.333 8.333 0 104.107 4.107a8.333 8.333 0 0011.785 11.785zm-2.357-9.429a5 5 0 11-7.071 7.071 5 5 0 017.07-7.07z"
      ></path>
      <path d="M15.893 15.893l-2.357-2.357"></path>
      <path d="M4.107 15.893l2.357-2.357"></path>
      <path d="M4.107 4.107l2.357 2.357"></path>
      <path d="M15.893 4.107l-2.357 2.357"></path>
      <path d="M13.536 13.536a5 5 0 10-7.072-7.072 5 5 0 007.072 7.072z"></path>
    </svg>
  );
};

Support.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Support.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Support;
