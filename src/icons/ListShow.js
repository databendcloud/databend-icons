import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ListShow = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"></path>
      <path d="M9.25 9.9h5.3"></path>
      <path d="M5.25 9.9h1"></path>
      <path d="M9.25 13h5.3"></path>
      <path d="M5.25 13h1"></path>
      <path d="M9.25 6.8h5.3"></path>
      <path d="M5.25 6.8h1"></path>
    </svg>
  );
};

ListShow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ListShow.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default ListShow;
