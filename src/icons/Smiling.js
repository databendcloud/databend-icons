import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Smiling = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default')}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"></path>
      <path d="M12.917 12.917s-.834 1.666-2.917 1.666c-2.083 0-2.917-1.666-2.917-1.666"></path>
      <path d="M12.917 7.5v1.667"></path>
      <path d="M7 7v1.667"></path>
    </svg>
  );
};

Smiling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Smiling.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Smiling;
