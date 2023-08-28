import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Setting = props => {
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
      <path d="M8 16.457A6.998 6.998 0 014.955 14.6a2.1 2.1 0 00-1.814-3.443 7.031 7.031 0 01.179-3.51h.029a2.1 2.1 0 001.885-3.028A6.989 6.989 0 018.128 3a2.1 2.1 0 003.744 0 6.989 6.989 0 012.893 1.62 2.1 2.1 0 001.914 3.027 7.03 7.03 0 01.178 3.51 2.1 2.1 0 00-1.814 3.443 6.998 6.998 0 01-3.042 1.857 2.101 2.101 0 00-4.002 0z"></path>
      <path d="M10 12.197a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9z"></path>
    </svg>
  );
};

Setting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Setting.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Setting;
