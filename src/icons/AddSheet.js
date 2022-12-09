import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const AddSheet = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      class="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M16.667 9.583v-3.75l-3.75-4.166h-8.75a.833.833 0 00-.834.833v15c0 .46.373.833.834.833h5"></path>
      <path d="M13.75 12.083v5.834"></path>
      <path d="M10.833 15h5.834"></path>
      <path d="M12.5 1.667v4.166h4.167"></path>
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
