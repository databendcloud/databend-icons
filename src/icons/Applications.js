import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Applications = props => {
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
      <path d="M4.105 10.632v4.79c0 .61.495 1.104 1.106 1.104h9.579c.61 0 1.105-.494 1.105-1.105v-4.79"></path>
      <path d="M3 6.947c0-.407.33-.736.737-.736h12.526c.407 0 .737.33.737.736v2.948c0 .407-.33.737-.737.737H3.737A.737.737 0 013 9.895V6.947z"></path>
      <path d="M12.579 6.21V4.738A.737.737 0 0011.842 4H8.158a.737.737 0 00-.737.737V6.21"></path>
      <path d="M6.684 9.895v2.21"></path>
      <path d="M13.316 9.895v2.21"></path>
    </svg>
  );
};

Applications.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Applications.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Applications;
