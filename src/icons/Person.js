import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Person = props => {
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
      <path d="M10 8.6A2.8 2.8 0 1010 3a2.8 2.8 0 000 5.6z"></path>
      <path d="M16.3 17a6.3 6.3 0 10-12.6 0"></path>
    </svg>
  );
};

Person.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Person.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Person;
