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
function CredentialsIcon(props) {
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
      <path d="M8 16V9a2 2 0 114 0v7"></path>
      <path d="M6 15V9a4 4 0 018 0v6"></path>
      <path d="M4 13.333V9a6 6 0 0112 0v4.333"></path>
      <path d="M10 16.333V12"></path>
      <path d="M10 9.875v-.917"></path>
    </svg>
  );
}

CredentialsIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CredentialsIcon;
