import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Effects = props => {
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
      <path d="M10 14.942a3.5 3.5 0 103.208-5.998"></path>
      <path d="M6.792 8.944a3.501 3.501 0 00.875 6.89 3.5 3.5 0 003.258-4.781"></path>
      <path d="M10 11.167a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
    </svg>
  );
};

Effects.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Effects.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Effects;
