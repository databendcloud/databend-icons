import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Activity = props => {
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
      <path d="M3 9.158h2.864L8.056 3l3.5 12.727 2.58-6.569H17"></path>
    </svg>
  );
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Activity.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Activity;
