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
function TicketsIcon(props) {
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
      <path d="M3.333 4.667h2.334s.333 1.666 2 1.666c1.666 0 2-1.666 2-1.666h7v10.666h-7s-.334-1.666-2-1.666c-1.667 0-2 1.666-2 1.666H3.333V4.667z"></path>
      <path d="M7.667 8.333V9"></path>
      <path d="M7.667 11v.667"></path>
      <path d="M10.333 9H14"></path>
      <path d="M10.333 11H14"></path>
    </svg>
  );
}

TicketsIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TicketsIcon;
