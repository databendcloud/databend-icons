import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Phone = props => {
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
      <path d="M4 12.4h12.8v4.8a.8.8 0 01-.8.8H4.8a.8.8 0 01-.8-.8v-4.8z"></path>
      <path d="M16.8 12.4V2.8A.8.8 0 0016 2H4.8a.8.8 0 00-.8.8v9.6"></path>
      <path d="M9.6 15.2h1.6"></path>
    </svg>
  );
};

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Phone.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Phone;
