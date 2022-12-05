import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const DashboardIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M18.5 3.333h-15a.833.833 0 00-.833.834v11.666c0 .46.373.834.833.834h15c.46 0 .833-.373.833-.834V4.167a.833.833 0 00-.833-.834z"></path>
      <path d="M14.333 10.417v2.916"></path>
      <path d="M11 6.667v6.666"></path>
      <path d="M7.667 8.333v5"></path>
    </svg>
  );
};

DashboardIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DashboardIcon;
