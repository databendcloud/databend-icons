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
function MoreIcon(props) {
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
      <path
        d="M5 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
      <path
        d="M10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
      <path
        d="M15 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
}

MoreIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default MoreIcon;
