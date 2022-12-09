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
function OrganizationIcon(props) {
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
      <path d="M1.667 2.083h16.666v3.334l-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35-.583.35a2.917 2.917 0 01-3.001 0L10 5.416l-.583.35a2.917 2.917 0 01-3.001 0l-.583-.35-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35V2.083z"></path>
      <path d="M17.5 10.417h-15v7.5h15v-7.5z"></path>
      <path d="M3.75 6.667v3.75"></path>
      <path d="M16.25 6.667v3.75"></path>
    </svg>
  );
}

OrganizationIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default OrganizationIcon;
