import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const StringIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3 17l7-14 7 14"></path>
      <path d="M6 11h8"></path>
    </svg>
  );
};

StringIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default StringIcon;
