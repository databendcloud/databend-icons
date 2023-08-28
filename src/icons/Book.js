import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Book = props => {
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
      <path d="M4 15.5V4.25C4 3.007 5.075 2 6.4 2H16v12H6.4c-1.89 0-2.4.257-2.4 1.5z"></path>
      <path clipRule="evenodd" d="M5.5 17H16v-3H5.5a1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Book.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Book;
