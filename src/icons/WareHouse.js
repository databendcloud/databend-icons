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
function WareHouseIcon(props) {
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
      <path d="M9.583 17.917h8.334V2.083H5.833V6.25"></path>
      <path d="M2.083 6.25h7.5v11.667h-7.5V6.25z"></path>
      <path d="M5.417 15.417h.833"></path>
      <path d="M11.667 15.417h.833"></path>
    </svg>
  );
}

WareHouseIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default WareHouseIcon;
