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
function DocTitleIcon(props) {
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
      <path d="M3 4v12.444"></path>
      <path d="M10 4v12.444"></path>
      <path d="M3.389 10.222H9.61"></path>
      <path d="M13.111 10.222v6.222"></path>
      <path d="M13.111 12.954c0-.998.778-1.954 1.945-1.954 1.166 0 1.944.917 1.944 1.954v3.496"></path>
    </svg>
  );
}

DocTitleIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DocTitleIcon;
