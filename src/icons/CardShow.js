import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CardShow = props => {
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
      <path d="M8.75 5.417H5.417V8.75H8.75V5.417z"></path>
      <path d="M14.583 5.417H11.25V8.75h3.333V5.417z"></path>
      <path d="M8.75 11.25H5.417v3.333H8.75V11.25z"></path>
      <path d="M14.583 11.25H11.25v3.333h3.333V11.25z"></path>
    </svg>
  );
};

CardShow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

CardShow.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default CardShow;
