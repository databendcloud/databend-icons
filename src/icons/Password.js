import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Password = props => {
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
      <path d="M9.623 9.766a3.288 3.288 0 01.876 3.196 3.309 3.309 0 01-2.355 2.343 3.33 3.33 0 01-3.213-.872 3.288 3.288 0 01.04-4.626 3.33 3.33 0 014.651-.04h0z"></path>
      <path d="M9.667 9.667L15.333 4"></path>
      <path d="M12.102 7.3l1.81 1.8 2.11-2.1-1.81-1.8-2.11 2.1z"></path>
    </svg>
  );
};

Password.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Password.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Password;
