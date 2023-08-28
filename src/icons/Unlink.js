import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Unlink = props => {
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
      <path d="M10.74 6.88L7.72 3.858c-1.112-1.112-2.878-1.15-3.944-.083-1.066 1.066-1.03 2.832.083 3.944l3.02 3.02"></path>
      <path d="M13.08 9.225l3.02 3.02c1.111 1.112 1.256 2.825.082 3.944-1.173 1.12-2.832 1.029-3.944-.083l-3.02-3.02"></path>
      <path d="M8.933 8.838l-1.51-1.51"></path>
      <path d="M12.457 12.362l-1.51-1.51"></path>
    </svg>
  );
};

Unlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Unlink.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Unlink;
