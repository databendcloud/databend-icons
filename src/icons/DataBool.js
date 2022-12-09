import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataBool = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M7.746 7.099l-2.125 4.11v2.03H4.125v-2.03L2 7.1h1.697L4.886 9.67 6.066 7.1h1.68z"
        fillOpacity=".8"
      ></path>
      <path
        d="M11.453 5l-2.396 9.725H8.27L10.657 5h.796z"
        fillOpacity=".8"
      ></path>
      <path
        d="M18 13.238h-1.495l-2.502-3.786v3.786h-1.495V7.1h1.495l2.502 3.804V7.1H18v6.14z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

DataBool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DataBool.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DataBool;
