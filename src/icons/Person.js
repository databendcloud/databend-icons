import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Person = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M10 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"></path>
      <path d="M16 16.667a6 6 0 00-12 0"></path>
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
