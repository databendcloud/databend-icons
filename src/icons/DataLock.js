import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataLock = props => {
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
      <path d="M18 12.6a4 4 0 11-8 0 4 4 0 018 0z"></path>
      <path d="M14 5v3.6a3.99 3.99 0 00-2.977 1.328 3.985 3.985 0 00-.966 3.351 4.004 4.004 0 001.973 2.803c-1.065.322-2.479.518-4.03.518-3.314 0-6-.895-6-2V5"></path>
      <path d="M14 5c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"></path>
      <path d="M2 11.4c0 1.105 2.686 2 6 2 .723 0 1.416-.043 2.057-.12"></path>
      <path d="M2 8.2c0 1.105 2.686 2 6 2 1.103 0 2.136-.1 3.023-.272"></path>
      <path d="M16 12.6a2 2 0 11-4 0h4z"></path>
      <path d="M14 10.6a1.2 1.2 0 011.2 1.2v.8h-2.4v-.8a1.2 1.2 0 011.2-1.2z"></path>
    </svg>
  );
};

DataLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DataLock.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DataLock;
