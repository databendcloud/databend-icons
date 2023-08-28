import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Worksheet = props => {
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
      <path d="M4.4 17V3h8.05l3.15 3.675V17H4.4z"></path>
      <path d="M8.95 11.4h-2.1v2.45h2.1V11.4z"></path>
      <path d="M6.5 13.85h7"></path>
      <path d="M11.05 9.65h-2.1v4.2h2.1v-4.2z"></path>
      <path d="M13.15 7.9h-2.1v5.95h2.1V7.9z"></path>
    </svg>
  );
};

Worksheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Worksheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Worksheet;
