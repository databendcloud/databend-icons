import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const IdentityCard = props => {
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
      <path d="M17.2 4H2.8a.8.8 0 00-.8.8V16a.8.8 0 00.8.8h14.4a.8.8 0 00.8-.8V4.8a.8.8 0 00-.8-.8z"></path>
      <path d="M7.2 10.8a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"></path>
      <path d="M9.6 13.2a2.4 2.4 0 10-4.8 0"></path>
      <path d="M11.6 8.8h3.2"></path>
      <path d="M12.4 12h2.4"></path>
    </svg>
  );
};

IdentityCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

IdentityCard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default IdentityCard;
