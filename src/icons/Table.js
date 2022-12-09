import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Table = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default props.className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M16.375 2.5H3.625c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V3.625c0-.621-.504-1.125-1.125-1.125z"></path>
      <path d="M7.5 2.5v15"></path>
      <path d="M12.5 2.5v15"></path>
      <path d="M2.5 7.5h15"></path>
      <path d="M2.5 12.5h15"></path>
    </svg>
  );
};

Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Table.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Table;
