import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ActivityIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3 9.452h3L8.296 3l3.667 13.333 2.704-6.881h3"></path>
    </svg>
  );
};

ActivityIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ActivityIcon;
