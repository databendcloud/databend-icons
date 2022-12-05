import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ChartsBarIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3.333 15h13.334"></path>
      <path d="M7 11.25H5V15h2v-3.75z"></path>
      <path d="M11 8.75H9V15h2V8.75z"></path>
      <path d="M15 5h-2v10h2V5z"></path>
    </svg>
  );
};

ChartsBarIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsBarIcon;
