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
function OffScreenIcon(props) {
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
      <path d="M13 4v3h3"></path>
      <path d="M7 4v3H4"></path>
      <path d="M7 16v-3H4"></path>
      <path d="M13 16v-3h2.966"></path>
    </svg>
  );
}

OffScreenIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default OffScreenIcon;
