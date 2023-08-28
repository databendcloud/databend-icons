import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Copy = props => {
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
      <path d="M6.526 6.347V4.888c0-.49.398-.888.888-.888h7.698c.49 0 .888.398.888.888v7.697c0 .491-.398.889-.888.889h-1.475"></path>
      <path d="M12.585 6.526H4.888A.888.888 0 004 7.414v7.698c0 .49.398.888.888.888h7.697c.491 0 .889-.398.889-.888V7.414a.888.888 0 00-.889-.888z"></path>
    </svg>
  );
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Copy.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Copy;
