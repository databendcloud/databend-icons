import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Label = props => {
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
      <path d="M4.75 3h10.5v14L10 13.3 4.75 17V3z"></path>
      <path d="M15.25 3H4.75v4.2h10.5V3z"></path>
    </svg>
  );
};

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Label.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Label;
