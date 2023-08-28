import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Level = props => {
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
      <path d="M10 16.6L3 8.375 4.993 4h10.014L17 8.375 10 16.6z"></path>
      <path d="M12.8 8.2L10 11.35 7.2 8.2"></path>
    </svg>
  );
};

Level.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Level.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Level;
