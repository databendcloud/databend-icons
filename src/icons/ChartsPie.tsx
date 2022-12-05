import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ChartsPieIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M16.667 10A6.667 6.667 0 1110 3.333V10h6.667z"></path>
      <path d="M16.361 8H12V3.639A6.682 6.682 0 0116.361 8z"></path>
    </svg>
  );
};

ChartsPieIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsPieIcon;
