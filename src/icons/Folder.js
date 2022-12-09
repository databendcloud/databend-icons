import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Folder = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      class="icon default className"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M2.083 3.333c0-.46.373-.833.834-.833h5L10 5h7.083c.46 0 .834.373.834.833v10.834c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833V3.333z"></path>
      <path d="M5.833 9.167l2.084 2.083-2.084 2.083"></path>
      <path d="M10.833 13.333h3.334"></path>
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
