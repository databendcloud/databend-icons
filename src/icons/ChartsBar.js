import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsBar = props => {
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
      <path d="M3.333 15.5h14"></path>
      <path d="M7.183 11.563h-2.1V15.5h2.1v-3.938z"></path>
      <path d="M11.383 8.938h-2.1V15.5h2.1V8.937z"></path>
      <path d="M15.583 5h-2.1v10.5h2.1V5z"></path>
    </svg>
  );
};

ChartsBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsBar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsBar;
