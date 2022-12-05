import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SuspendedIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M5.5 4.5h3v11h-3v-11z"></path>
      <path d="M11.5 4.5h3v11h-3v-11z"></path>
    </svg>
  );
};

SuspendedIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SuspendedIcon;
