import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Select = props => {
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
      <path d="M6 8.5l4.034-3L14 8.5"></path>
      <path d="M6 11.5l4.034 3 3.966-3"></path>
    </svg>
  );
};

Select.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Select.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Select;
