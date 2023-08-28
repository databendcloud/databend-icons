import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const AddSheet = props => {
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
      <path d="M15.6 9.65V6.5L12.45 3H5.1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h4.2"></path>
      <path d="M13.15 11.75v4.9"></path>
      <path d="M10.7 14.2h4.9"></path>
      <path d="M12.1 3v3.5h3.5"></path>
    </svg>
  );
};

AddSheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

AddSheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default AddSheet;
