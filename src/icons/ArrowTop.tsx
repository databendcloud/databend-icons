import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ArrowTopIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M15 10l-5-5-5 5"></path>
      <path d="M9.997 5v10"></path>
    </svg>
  );
};

ArrowTopIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ArrowTopIcon;
