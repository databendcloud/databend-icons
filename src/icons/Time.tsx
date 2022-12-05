import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const TimeIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"></path>
      <path d="M10.004 5l-.001 5.004 3.533 3.533"></path>
    </svg>
  );
};

TimeIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TimeIcon;
