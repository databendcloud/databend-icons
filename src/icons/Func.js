import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Func = props => {
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
        d="M17.43 6.77a.18.18 0 00-.014-.258.187.187 0 00-.12-.047h-1.65a.178.178 0 00-.14.063l-2.792 3.3a.18.18 0 01-.304-.044l-1.443-3.21a.18.18 0 00-.165-.107H6.97l.02-.107.182-.961c.239-1.259.863-1.85 1.95-1.85.422 0 .806.04 1.108.107l.32-1.517A5.318 5.318 0 009.305 2C6.957 2 5.751 3.007 5.308 5.347l-.214 1.122H2.876a.18.18 0 00-.177.146l-.245 1.177a.183.183 0 00.177.22h2.143L2.75 17.78a.183.183 0 00.178.22h1.504a.18.18 0 00.177-.145l2.038-9.84h3.086l1.55 3.16a.18.18 0 01-.028.2l-4.104 4.612a.183.183 0 00.016.257c.034.03.078.045.12.045h1.653a.178.178 0 00.138-.064l2.81-3.333a.183.183 0 01.258-.022c.02.018.036.038.047.063l1.495 3.242c.03.064.093.107.166.107h1.468a.182.182 0 00.163-.261l-2.163-4.52a.18.18 0 01.03-.2l4.076-4.532z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Func.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Func.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Func;
