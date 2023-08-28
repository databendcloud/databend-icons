import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Folder = props => {
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
      <path d="M3 3.737C3 3.33 3.33 3 3.737 3h4.42L10 5.21h6.263c.407 0 .737.33.737.737v9.58c0 .406-.33.736-.737.736H3.737A.737.737 0 013 15.526V3.736z"></path>
    </svg>
  );
};

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Folder.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Folder;
