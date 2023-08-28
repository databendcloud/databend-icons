import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ColorWheel = props => {
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
      <path d="M5.917 15.833a1.75 1.75 0 001.75-1.75V9.858m-1.75 5.975a1.75 1.75 0 01-1.75-1.75V4.167h3.5v5.691m-1.75 5.975h9.916v-3.5h-5.691M7.667 9.858l5.546-5.546.137-.145 2.48 2.479-5.688 5.687m0 0l-2.988 2.988a1.75 1.75 0 01-2.475 0"></path>
    </svg>
  );
};

ColorWheel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ColorWheel.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ColorWheel;
