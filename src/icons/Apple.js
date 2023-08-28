import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Apple = props => {
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
        d="M11.95 4.518c.935-1.143.726-2.391.623-2.495-.104-.103-1.456.104-2.392 1.352-.832 1.143-.832 2.392-.727 2.496.106.103 1.456 0 2.495-1.353zm2.287 5.823c-.103-1.663 1.456-2.702 1.767-2.911v-.104s-1.353-1.663-3.326-1.559c-1.247.104-1.872.727-2.702.727-1.04 0-1.976-.727-3.119-.727-.936 0-3.638.832-3.845 4.365-.207 3.535 2.286 6.86 3.222 7.483.936.624 1.56.417 2.599-.103.52-.313 2.182-.416 3.118.207 1.143.416 2.806.104 4.678-4.054-.21.002-2.288-.518-2.392-3.324z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Apple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Apple.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Apple;
