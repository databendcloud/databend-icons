import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Wallet = props => {
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
      <path
        clipRule="evenodd"
        d="M7.894 5.79L12.724 3l1.615 2.796-6.445-.007z"
      ></path>
      <path d="M3 6.5a.7.7 0 01.7-.7h12.6a.7.7 0 01.7.7v9.8a.7.7 0 01-.7.7H3.7a.7.7 0 01-.7-.7V6.5z"></path>
      <path d="M13.938 13.15H17v-3.5h-3.063c-1.014 0-1.837.784-1.837 1.75s.823 1.75 1.838 1.75z"></path>
      <path d="M17 7.375v8.4"></path>
    </svg>
  );
};

Wallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Wallet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Wallet;
