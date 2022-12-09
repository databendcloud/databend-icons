import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExpandDown = props => {
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
      <path d="M2.5 4.167c0-.92.746-1.667 1.667-1.667h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.746-1.667-1.667V4.167z"></path>
      <path d="M2.5 13.333h15"></path>
      <path d="M8.333 6.667L10 8.333l1.667-1.666"></path>
      <path d="M2.5 10.833v5"></path>
      <path d="M17.5 10.833v5"></path>
    </svg>
  );
};

ExpandDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ExpandDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ExpandDown;
