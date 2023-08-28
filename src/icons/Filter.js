import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Filter = props => {
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
      <path d="M4 5l4.8 5.606v4.209L11.2 16v-5.394L16 5H4z"></path>
    </svg>
  );
};

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Filter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Filter;
