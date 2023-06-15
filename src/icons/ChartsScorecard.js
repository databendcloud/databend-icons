import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsScorecard = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15 4H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1z"></path>
      <path d="M6.667 7.333L8 12.667l2-4.334 2 4.334 1.333-5.334"></path>
    </svg>
  );
};

ChartsScorecard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsScorecard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsScorecard;
