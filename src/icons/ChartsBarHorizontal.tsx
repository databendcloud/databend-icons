import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps {
  style?: React.CSSProperties;
  className?: string | 'g-icon-defaut-primary';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
  color: string;
  size: string | number;
}
const ChartsBarHorizontalIcon: FC<IProps | any> = props => {
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
      <path d="M8.75 15v-2H5v2h3.75z"></path>
      <path d="M11.25 11V9H5v2h6.25z"></path>
      <path d="M15 7V5H5v2h10z"></path>
    </svg>
  );
};

ChartsBarHorizontalIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsBarHorizontalIcon;
