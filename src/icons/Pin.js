import React from 'react';
// import { FC } from 'react';
import clsx from 'clsx';
/*interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }*/
function PinIcon(props) {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      {...otherProps}
    >
      <path d="M4.457 7.293c1.1-1.099 2.406-1.069 3.826-.29l5.309-2.943-.3-2.065 4.713 4.714-2.061-.296-2.947 5.304c.743 1.516.809 2.727-.29 3.826l-3.242-3.24-6.78 5.012 4.998-6.796-3.226-3.226z"></path>
    </svg>
  );
}

PinIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default PinIcon;
