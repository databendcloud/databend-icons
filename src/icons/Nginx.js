import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Nginx = props => {
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
      <path
        d="M16.583 5.406L10.99 2.21c-.48-.28-1.079-.28-1.598 0L3.799 5.406c-.48.28-.799.799-.799 1.398v6.392c0 .56.32 1.119.799 1.398l5.593 3.196c.48.28 1.079.28 1.598 0l5.593-3.196c.48-.28.799-.799.799-1.398V6.804c0-.56-.32-1.079-.799-1.398zm-3.755 8.07c-.36 0-.8-.16-1.079-.48L8.194 8.762v3.955c0 .44-.32.759-.76.759h-.04c-.439 0-.759-.36-.759-.76V7.284c0-.4.36-.759.88-.759.399 0 .798.16 1.078.48l3.556 4.235V7.283c0-.439.36-.759.759-.759h.04c.439 0 .759.36.759.76v5.433c.04.44-.36.759-.88.759z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Nginx.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Nginx.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Nginx;
